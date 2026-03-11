

export const getStats = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return {
      total: 24,
      inProgress: 7,
      completed: 17,
    };
}

export const allTasks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [
    { title: "Make a design dashboard", completed: false, id: 1 },
    { title: "Configure the database", completed: true, id: 2 },
    { title: "Add authorization", completed: false, id: 3 },
  ];
};