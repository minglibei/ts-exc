// K ts 联合类型  使用 [P in K] 进行遍历
// [变量名]:[类型] = 值
/**
 * ts知识点
 * T 数据类型，获取T 中所有的属性 使用 keyof T -> 返回keys 组成的数组
 * K extends 数组  类型约束
 *  https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
 */
type MyPick<T, K extends keyof T> = {
     [P in K] : T[P]
}

/**
 * 尝试使用js实现
function MyPick(todo,keys){
    const obj = {}
    keys.forEach(k => {
        if(todo[k]){
            obj[k] = todo[k] 
        }
        
    });
    return obj
}*/