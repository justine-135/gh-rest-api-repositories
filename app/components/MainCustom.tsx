import { ReactNode } from "react";

interface Props {
  isLoading: boolean;
  children: ReactNode;
  error: boolean;
}

export const MainCustom = ({ children, isLoading, error }: Props) => {
  if (isLoading) {
    return "Loading...";
  }

  // console.log(error);

  return (
    <main className="grid place-items-center items-center w-full">
      {children}
    </main>
  );
};
