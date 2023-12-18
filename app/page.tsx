"use client";

import { ListCustom } from "./components/ListCustom";
import { MainCustom } from "./components/MainCustom";
import { useGetGhAPI } from "./hooks/useGetGhAPI";

interface Props {}

export default function Home() {
  const { data, error, isLoading } = useGetGhAPI();

  return (
    <MainCustom isLoading={isLoading} error={error}>
      <ListCustom list={data} title="My github repos" />
    </MainCustom>
  );
}
