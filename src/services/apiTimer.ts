import Taro from "@tarojs/taro";

export interface TaskRecord {
  _id: string;
  _openid: string;
  taskName: string;
  totalDuration: number;
  lastUpdated: string;
}

export async function getAllTasks(): Promise<TaskRecord[]> {
  const db = Taro.cloud.database();

  const res = await db
    .collection("timer-totals")
    .orderBy("lastUpdated", "desc")
    .get();

  return res.data as TaskRecord[];
}

/*
[
  {
    "_id": "abc123def456", 
    "_openid": "o_xxx",
    "taskName": "数学复习",
    "totalDuration": 3600,
    "lastUpdated": "2025-01-14T12:30:00Z"
  },
]
*/

export async function updateTask(
  taskId: string,
  durationInSeconds: number,
  taskName?: string
) {
  const db = Taro.cloud.database();
  const _ = db.command;

  const updateData: any = {
    totalDuration: _.inc(durationInSeconds),
    lastUpdated: db.serverDate(),
  };

  if (taskName) {
    updateData.taskName = taskName;
  }

  await db.collection("timer-totals").doc(taskId).update({
    data: updateData,
  });
}

export async function addTask(taskName: string) {
  const db = Taro.cloud.database();
  await db.collection("timer-totals").add({
    data: {
      taskName,
      totalDuration: 0,
      lastUpdated: db.serverDate(),
    },
  });
}

/*
export async function getTask(taskId: string) {
  const db = Taro.cloud.database();
  const openid = Taro.getStorageSync("openid");
  const result = await (db.collection("timer-totals") as any)
    .where({
      _openid: openid,
      taskId: taskId,
    })
    .get();
  if (result.data.length > 0) {
    return result.data[0].totalDuration || 0;
  } else {
    return 0;
  }
}
*/
