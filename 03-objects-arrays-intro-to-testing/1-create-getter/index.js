/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const pathArray = path.split('.');

  return obj => {
    let result = obj;
    for (let item of pathArray) {
      result = result?.[item];
      if (result === undefined) {
         break;
      }
    }
    return result;
  }

}

export function createGetterV2(path) {
  const pathArray = path.split('.');
  return obj => {
    let result = obj;
    for (let item of pathArray) {
      // Если в объекте result нет ключа item, то прекращаю проход по массиву,
      // если есть, то в result присваиваю этот ключ
      //Но в тестах получаю ошибку:  Cannot use 'in' operator to search for 'title' in category
      //Как я поняла, JS не знает, что result - объект и не разрешает такой синтаксис
      //Можно ли мое решение как-то изменить и использовать или нет?
      if (item in result) {
        result = item;
      } else {
        break;
      }
    }
    return result;
  }
}
