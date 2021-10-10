export const filterList = (list, prop, status, status2) => {
  return status2 ?
    list.filter((item) => item[prop] === status || item[prop] === status2) 
    :
    list.filter((item) => item[prop] === status);
}

export const sortData = (data, sortBy) => {
  return data.sort((a, b) => {
    return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
  })
}