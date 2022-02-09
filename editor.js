
const CSS_COLOR_NAMES = [
    "black",
    "antiqueWhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "aliceBlue",
    "blanchedAlmond",
    "blue",
    "blueViolet",
    "brown",
    "burlyWood",
    "cadetBlue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerBlue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkBlue",
    "darkCyan",
    "darkGoldenRod",
    "darkGray",
    "darkGrey",
    "darkGreen",
    "darkKhaki",
    "darkMagenta",
    "darkOliveGreen",
    "darkOrange",
    "darkOrchid",
    "darkRed",
    "darkSalmon",
    "darkSeaGreen",
    "darkSlateBlue",
    "darkSlateGray",
    "darkSlateGrey",
    "darkTurquoise",
    "darkViolet",
    "deepPink",
    "deepSkyBlue",
    "dimGray",
    "dimGrey",
    "dodgerBlue",
    "direBrick",
    "dloralWhite",
    "forestGreen",
    "fuchsia",
    "gainsboro",
    "ghostWhite",
    "gold",
    "goldenRod",
    "gray",
    "grey",
    "green",
    "greenYellow",
    "honeyDew",
    "hotPink",
    "indianRed",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderBlush",
    "lawnGreen",
    "lemonChiffon",
    "lightBlue",
    "lightCoral",
    "lightCyan",
    "lightGoldenRodYellow",
    "lightGray",
    "lightGrey",
    "lightGreen",
    "lightPink",
    "lightSalmon",
    "lightSeaGreen",
    "lightSkyBlue",
    "lightSlateGray",
    "lightSlateGrey",
    "lightSteelBlue",
    "lightYellow",
    "lime",
    "limeGreen",
    "linen",
    "magenta",
    "maroon",
    "mediumAquaMarine",
    "mediumBlue",
    "mediumOrchid",
    "mediumPurple",
    "mediumSeaGreen",
    "mediumSlateBlue",
    "mediumSpringGreen",
    "mediumTurquoise",
    "mediumVioletRed",
    "midnightBlue",
    "mintCream",
    "mistyRose",
    "moccasin",
    "navajoWhite",
    "navy",
    "oldLace",
    "olive",
    "oliveDrab",
    "orange",
    "orangeRed",
    "orchid",
    "paleGoldenRod",
    "paleGreen",
    "paleTurquoise",
    "paleVioletRed",
    "papayaWhip",
    "peachPuff",
    "peru",
    "pink",
    "plum",
    "powderBlue",
    "purple",
    "rebeccaPurple",
    "red",
    "rosyBrown",
    "royalBlue",
    "saddleBrown",
    "salmon",
    "sandyBrown",
    "seaGreen",
    "seaShell",
    "sienna",
    "silver",
    "skyBlue",
    "slateBlue",
    "slateGray",
    "slateGrey",
    "snow",
    "springGreen",
    "steelBlue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whiteSmoke",
    "yellow",
    "yellowGreen",
  ];
let colorSelect = document.getElementById('color')
let i
for(i = 0; i<CSS_COLOR_NAMES.length ; i++){
    let text = document.createElement('option')
    text.textContent = CSS_COLOR_NAMES[i]
    text.value = CSS_COLOR_NAMES[i]
    text.id = "colorop"
    colorSelect.appendChild(text)
}
let string
let FONT_FAMILIES = [
    "'Courier New', Courier, monospace",
    "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    "'Times New Roman', Times, serif",
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    "Georgia, 'Times New Roman', Times, serif",
    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
    "Verdana, Geneva, Tahoma, sans-serif"
]
let fontFamily = document.getElementById('family')
for(i = 0; i<FONT_FAMILIES.length ; i++){
    let text = document.createElement('option')
    text.textContent = FONT_FAMILIES[i]
    text.value = FONT_FAMILIES[i]
    fontFamily.appendChild(text)
}
let FONT_SIZES = [
    "0.5rem",
    "0.75rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.25rem",
    "2.5rem",
    "2.75rem",
    "3rem",
    "3.25rem",
    "3.5rem",
    "3.75rem",
    "4rem",
    "4.25rem",
    "4.5rem",
    "4.75rem",
    "5rem",
    "5.25rem",
    "5.5rem",
    "5.75rem",
    "6rem",
    "6.25rem",
    "6.5rem",
    "6.75rem",
    "7rem",
    "7.25rem",
    "7.5rem",
    "7.75rem",
    "8rem",
    "8.25rem",
    "8.5rem",
    "8.75rem",
    "9rem"
]
let fontSize = document.getElementById('size')
for(i = 0; i<FONT_SIZES.length ; i++){
    let text = document.createElement('option')
    text.textContent = FONT_SIZES[i]
    text.value = FONT_SIZES[i]
    fontSize.appendChild(text)
}
let FONT_STYLES = [
    "normal",
    "italic",
    "oblique"
]
let fontStyles = document.getElementById('style')
for(i = 0; i<FONT_STYLES.length ; i++){
    let text = document.createElement('option')
    text.textContent = FONT_STYLES[i]
    text.value = FONT_STYLES[i]
    fontStyles.appendChild(text)
}
let mainText = document.getElementById('maininput')
mainText.style.color = colorSelect.value
console.log(colorSelect.value)
colorSelect.addEventListener("blur", () => {
    mainText.style.color = colorSelect.value
    console.log(colorSelect.value)
})

fontFamily.addEventListener("blur", () => {
    mainText.style.fontFamily = fontFamily.value
    console.log(fontFamily.value)
})

fontSize.addEventListener("blur", () => {
    mainText.style.fontSize = fontSize.value
})
fontStyles.addEventListener("blur", () => {
    mainText.style.fontStyle = fontStyles.value
})

let backColor = document.getElementById('background-color')

for(i = 0; i<CSS_COLOR_NAMES.length ; i++){
    let text = document.createElement('option')
    text.textContent = CSS_COLOR_NAMES[i]
    text.value = CSS_COLOR_NAMES[i]
    backColor.appendChild(text)
}

backColor.addEventListener("blur", () => {
    mainText.style.backgroundColor = backColor.value
})



mainText.addEventListener("input" , () => {
    string = mainText.value
})
mainText.addEventListener("blur", () => {
    console.log(string)
})


