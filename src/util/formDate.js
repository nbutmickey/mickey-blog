export const formatTime = (date, type) => {
  if (type === 'yyyy-mm-dd') {
    return `${new Date(date).getFullYear()}-${(new Date(date).getMonth() + 1) < 10 ? ('0' + (new Date(date).getMonth() + 1)) : (new Date(date).getMonth() + 1)}-${(new Date(date).getDate()) < 10 ? ('0' + new Date(date).getDate()) : new Date(date).getDate()}`
  } else if(type === 'yyyy.mm.dd hh:mm:ss'){
    return `${new Date(date).getFullYear()}.${(new Date(date).getMonth() + 1) < 10 ? ('0' + (new Date(date).getMonth() + 1)) : (new Date(date).getMonth() + 1)}.${(new Date(date).getDate()) < 10 ? ('0' + new Date(date).getDate()) : new Date(date).getDate()}  ${(new Date(date).getHours())<10?('0' + new Date(date).getHours()) : new Date(date).getHours()}:${(new Date(date).getMinutes())<10?('0' + new Date(date).getMinutes()) : new Date(date).getMinutes()}:${(new Date(date).getSeconds())<10?('0' + new Date(date).getSeconds()) : new Date(date).getSeconds()}`
  } else{
    return `${(new Date(date).getMonth() + 1) < 10 ? ('0' + (new Date(date).getMonth() + 1)) : (new Date(date).getMonth() + 1)}-${(new Date(date).getDate()) < 10 ? ('0' + new Date(date).getDate()) : new Date(date).getDate()}`
  }
};
