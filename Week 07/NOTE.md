## 目录结构
Atom => Grammar Runtime
Expression
Statement
Structure
Program/Module

### 表达式

产生式描述运算符优先级

member

new
两个例子：new a()() new new a() 

call

left handside & right handside

update

单目

** 乘方

### 类型转换

装箱与拆箱转换

toString vs ValueOf

Symbol.toPrimtive

包装类 Number String Boolean Symbol

StringToNumber()与NumberToString()


### JS 语句
Completion Record: 语句完成状态的记录
[[type]]: normal break continue return throw
[[value]]: 基本类型
[[target]]: label

### 简单语句和复合语句

简单语句
expressionState
emptyState
debuggerState
breakState
continueState
throwState
returnState

复合语句
blockState
ifState
switchState
withState
labelState
interationState
tryState

### 声明
FunctionDeclaration
GeneratorDeclararion
AsyncFunctionDeclaration
AsyncGeneartorDelaration
VariableStatement
ClassDeclaration
LexiacalDeclaraion  => const let 

function声明
function
function * 
async function 
async function * 
var 

let const class

预处理机制

所有的申明都具有预处理机制

作用域

### 宏任务与微任务

js 执行力度在运行时的表示：
宏任务 传给JS引擎的任务
微任务 在JS引擎内容的任务
函数调用
语句/声明
表达式
直接量/变量/this

事件循环

等待代码 => 获取代码 => 执行

### 函数调用

call stack

执行上下文 当前能够访问到的所有变量

闭包作用域链机制

Realm js引擎的实例种所有的内置对象都会存入Realm
