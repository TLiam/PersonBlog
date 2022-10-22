# 个人博客
使用自己已掌握的前端知识搭建一个个人博客，不仅能加强自己对知识的掌握，也是一个属于自己的项目，为自己增加项目经验

## BEM命名法

1.  `块(block)` 与 `元素(element)` 之间使用 `双下划线__`链接，例如`form__item`
2. `元素(element)`与`状态(modifier)`之间使用`双中划线--`链接，表示元素的不同状态，例如`el__button--success`
3. 使用`js`控制样式时，`css`命名用`is-`开头，例如`is-success`

## Github 第一版
详细内容可以查看 `个人博客.xmind`
第一版填写了`用户故事`以及涉及到的`技术栈`
`技术栈`包括了`前台数据处理/交互/组件化`、`CSS预编译器`、`UI组件库`

### Github 第一版 1.1
第一版 1.1 填写了 `功能页面` 完成各页面的路由跳转，并且封装了 `Header` 组件，同时使用到了 `BEM命名法`，并在开头对该命名法做了解释
收获：在开始封装时，并没有使用列表渲染去渲染 `menu__item` ，后来想到直接使用 `RouterLink` ，并对 `to` 进行了动态绑定，定义了 `menuMember` ，其中 `page` 为显示的名称，`route` 为点击跳转的页面
