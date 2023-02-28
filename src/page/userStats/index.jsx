import { lazy, Suspense, useEffect } from "react";
import { UserStatsGragphs } from "../../components/userStatsGraphs";
import { Error } from "../../helper/error";
import { Loading } from "../../helper/loading";
import { useFetch } from "../../hooks/useFetch";
import { STATS_GET } from "../../services/api";
const UserStatsGragphss = lazy(() =>
  import("../../components/userStatsGraphs")
);

export const UserStatic = () => {
  const { data, loading, error, request } = useFetch();
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    const getData = async () => {
      const { url, options } = STATS_GET(token);
      await request(url, options);
    };
    getData();
  }, []);
  if (loading) return <Loading />;
  if (error) return <Error vazio={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <UserStatsGragphs data={data} />
      </Suspense>
    );
  else return null;
};
