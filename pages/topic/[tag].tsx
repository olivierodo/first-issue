import { useRouter } from "next/router";

import { RepositoryList } from "../../components/RepositoryList";
import { useAppContext } from "../_app";

export default function Topic() {
  const { repositories } = useAppContext();

  const router = useRouter();
  const { tag } = router.query;

  return (
    <RepositoryList
      repositories={repositories.filter((repository) =>
        repository.topics?.some((topic) => topic.id == tag)
      )}
    />
  );
}