import { BACKEND_URL } from '@/constants/envs';

export type RequestConfig = {
  enabled?: boolean;
  headers?: Partial<Record<string, string>>;
  next?: { tags?: string[] };
  params?: Record<string, unknown>;
  retry?: boolean;
} & RequestInit;

export type ApiResponse<TData> = {
  data?: TData;
  error?: unknown;
  status?: number;
};

const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

type Method = keyof typeof HTTP_METHOD;

type RequestParams = {
  path?: string;
  params?: Record<string, unknown>;
  config?: RequestConfig;
};

export abstract class ApiClient {
  protected readonly basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  protected request = async <TData>(
    method: Method,
    path: string,
    config: RequestConfig = {}
  ): Promise<ApiResponse<TData>> => {
    const fullPath = this.basePath + path;

    const url = this.buildUrl(fullPath, config.params);

    const headers = this.prepareHeaders(config.headers, config.body);

    let body = config.body;

    if (
      headers['Content-Type'] === 'application/json' &&
      body &&
      !(body instanceof FormData)
    ) {
      body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url.toString(), {
        method,
        ...config,
        headers,
        body,
      });

      const contentType = response.headers.get('content-type') || '';
      const isJson = contentType.includes('application/json');

      const responseData = isJson
        ? await response.json().catch(() => undefined)
        : await response.text();

      if (!response.ok) {
        return { error: responseData, status: response.status };
      }

      return { data: responseData as TData };
    } catch (error) {
      console.error('API SERVICE - Network or Service Error:', {
        endpoint: url.toString(),
        errorRaw: error,
        errorMessage:
          error instanceof Error ? error.message : JSON.stringify(error),
      });

      return {
        error: {
          message: 'Network error or server unavailable.',
          details: error,
        },
      };
    }
  };

  protected get = <TData>({
    path = '',
    params = {},
    config = {},
  }: RequestParams = {}) =>
    this.request<TData>(HTTP_METHOD.GET, path, { params, ...config });

  protected post = <TData>(
    path = '',
    data: RequestInit['body'],
    config: RequestConfig = {}
  ) => this.request<TData>(HTTP_METHOD.POST, path, { body: data, ...config });

  protected put = <TData>(
    path = '',
    data: RequestInit['body'],
    config: RequestConfig = {}
  ) => this.request<TData>(HTTP_METHOD.PUT, path, { body: data, ...config });

  protected patch = <TData>(
    path = '',
    data: RequestInit['body'],
    config: RequestConfig = {}
  ) => this.request<TData>(HTTP_METHOD.PATCH, path, { body: data, ...config });

  protected delete = <TData>(
    path = '',
    data: RequestInit['body'],
    config: RequestConfig = {}
  ) => this.request<TData>(HTTP_METHOD.DELETE, path, { body: data, ...config });

  private buildUrl(path: string, params?: Record<string, unknown>) {
    const url = new URL(/^https?:\/\//.test(path) ? path : BACKEND_URL + path);

    if (params) {
      for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      }
    }
    return url;
  }

  private prepareHeaders(
    customHeaders?: Partial<Record<string, string>>,
    body?: unknown
  ) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...customHeaders,
    };

    if (body instanceof FormData) {
      delete headers['Content-Type'];
    }

    return headers;
  }
}
