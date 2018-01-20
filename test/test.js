const expect = require('chai').expect;
const platzom = require('..').default;

describe('#platzom', function () {
  it('Si la palabra termina en "AR", se le quitan esos dos caracteres.', function () {
    const translation = platzom('Programar');
    expect(translation).to.equal('Program');
  })
  
  it('Si la palabra empieza con "Z", se le añade "PE" al final.', function () {
    const translation1 = platzom('Zorro');
    const translation2 = platzom('Zarpar');
    
    expect(translation1).to.equal('Zorrope');
    expect(translation2).to.equal('Zarppe');
  })
  
  it('Si la palabra es más larga de 10 caracteres, se parte en dos y se une con un guión medio.', function () {
    const translation = platzom('Abecedario');

    expect(translation).to.equal('Abece-dario');
  })
  
  it('Si la palabra original es un palíndromo ninguna regla anterior aplica y se devuelve la misma palabra intercalando mayusculas y minusculas.', function () {
    const translation = platzom('sometemos');

    expect(translation).to.equal('SoMeTeMoS'); 
  })
})