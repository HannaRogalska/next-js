import { resolve } from "path";

export const getStats = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return {
      total: 24,
      inProgress: 7,
      completed: 17,
    };
}