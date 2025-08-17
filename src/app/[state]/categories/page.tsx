import { redirect } from "next/navigation";

import { APP_PATHS } from "@/constants/app.paths";
import { IStateCode } from "@/constants/states";

type Props = {
  params: Promise<{
    state: IStateCode;
  }>;
};

export default async function CategoriesPage({ params }: Props) {
  const { state } = await params;

  return redirect(APP_PATHS.setStateCodePath(state));
}
