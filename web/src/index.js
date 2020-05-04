function component() {
    const element = document.createElement('div');

    element.innerHTML = "<h3>Where in the world is carmen san diego?</h3>";

    return element;
}

document.body.append(component());