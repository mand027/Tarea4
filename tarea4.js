var oracion;
var frutas = ['manzana', 'pera', 'sandia', 'fresa', 'uvas', 'mango', 'durazno'];
var aux;
var alphabet = {
    'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
    'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
    'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
    'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
    'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
    'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
    'y': '-.--', 'z': '--..', ' ': '/',
    '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', '0': '-----'
};
oracion = 'MI CULO EN FUEGO';
aux = oracion.split('').map(function (e) { return alphabet[e.toLowerCase()] || ''; }).join(' ').replace(/ +/g, ' ');
console.log(aux);
