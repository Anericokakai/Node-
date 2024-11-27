//  #---------------------------------
//   HANDLE  ASYNC ERRORS

//  task with error
const task1 = async () => {
  return Promise.reject("Task Failed  ");
};

//  task without error
const task2 = async () => {
  return Promise.resolve("Task Completed  ");
};
const asyncErrorHandler = async () => {
  try {
    // const result1 = await task1();
    const result2 = await task2();
    console.log(result1, result2);
  } catch (error) {
    console.error("un error Occured ==> ", error);
  }
};

//  call the function
asyncErrorHandler();

//  #---------------------------------
