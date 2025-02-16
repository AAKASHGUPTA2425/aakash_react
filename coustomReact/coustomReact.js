function customerRender(reactElement, container) {
    // const domElement = document.createElement(reactElememt.type)
    // domElement.innerHTML = reactElememt.Children
    // domElement.setAttribute('href', reactElememt.props.href)
    // domElement.setAttribute('target', reactElememt.props.target)

    // container.appendChild(domElement)
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        if (prop === 'Children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}
const maincontainer = document.querySelector("#root")

customerRender(reactElement, maincontainer)