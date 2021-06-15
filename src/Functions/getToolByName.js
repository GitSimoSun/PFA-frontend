const getToolByName = (name, setTools) => {
    name = name.replace("#", "-sharp");
    fetch(`/api/tools&name=${name}`)
    .then(res => res.json())
    .then(res => setTools(prevData => [...prevData, res]))   
    .catch(console.log())
}
export default getToolByName;