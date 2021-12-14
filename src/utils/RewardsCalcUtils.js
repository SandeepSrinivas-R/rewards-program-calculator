import result from "../mock/transactions.json";
import { apiUrl, getApiCall, postApiCall } from "../Services/ApiController";

export const data = async () => {
  let response = await getApiCall(apiUrl.getAllTransactions);
  if (response?.code !== -1) {
    return response;
  } else {
    return result;
  }
};

export const addTransaction = async (transaction) => {
  let response = await postApiCall(apiUrl.addNewTransaction, transaction);
  if (response?.code !== -1) {
    data();
  } else {
    data().then((result) => result.push(transaction));
  }
  return true;
};

export const getRewardsTransactions = async () => {
  let result = await data();
  let a = result.map(function (transaction) {
    let rewards = calculateRewards(transaction.transactions);
    let sum = 0;
    rewards.forEach(function (x) {
      sum += x;
    });
    let obj = {
      name: transaction.name,
      rewardsPerMonth: rewards,
      totalRewards: sum,
    };
    return obj;
  });
  return a;
};

function calculateRewards(transactions) {
  let rewards = transactions.map(function (transaction) {
    let b = 0;
    if (transaction.amount > 50 && transaction.amount < 100) {
      b = transaction.amount - 50;
    } else if (transaction.amount >= 100) {
      b = 2 * (transaction.amount - 100) + 50;
    }
    return b;
  });
  return rewards;
}
