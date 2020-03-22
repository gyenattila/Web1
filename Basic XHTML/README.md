# ```HTML``` és ```XHTML```


## Mi az az XHTML?

* ```XHTML``` az ```HTML``` csak ```XML``` formában írva.
* E __X__ tensible __H__ yper __T__ ext __M__ arkup __L__ anguage
* Majdnem ugyan az, mint a ```HTML``` csak egy kicsit szigorúbb
* Szinte az összes böngésző támogatja, a leggyakrabban használtak, mint pl a Google Chrome, Mozilla Firefox, Safari teljes mértékben támogatják.


## Miért jó az XHTML?

Nagyon sok weboldal tartalmaz rosszul, helytelenül megírt ```HTML``` kódot. Az alábbi ```HTML``` kód tökéletesen jól működik, noha nem követi a ```HTML``` szabályokat.

```html
<html>
<head>
  <title>This is bad HTML</title>
<body>
  <h1>Bad HTML
  <p>This is a paragraph
</body>
```

A mai piac különböző böngésző technológiákból áll. Néhány böngésző számítógépen fut, míg más böngészők mobiltelefonokon vagy más apró eszközökön.A kisebb eszközökn gyakran kevesebb erőforrással rendelkeznek vagy nem tudják interpretálni a rosszul megírt kódot.

Az ```XML``` egy olyan leíró nyelv, ahol a dokumentumnak jól formázottnak kell lennie, ami azt jelenti, hogy tartani kell magát az adott nyelvre vonatkozó szabályokhoz.

Az ```XHTML``` tervezésénél figyelembe vették az ```XML``` szigorúságát és a ```HTML``` nyújtotta lehetőségeket. Tulajdonkáppen az ```XHTML``` az ```HTML``` kód ```XML``` formátumban megvalósítva.


## Legfontosabb különbségek a ```HTML```-hez képest


### Dokumentum Struktúra


* ```XHTML``` esetén a ```DOCTYPE``` attribútum megadása kötelező
* az ```xmlns``` attribútum megadása a ```<html>``` tagnél kötelező
* a ```<html>```, ```<head>```, ```<title>```, és a  ```<body>``` tagek megadása kötelező


### ```XHTML``` Elemek


* ```XHTML``` elemeknek megfelelően beágyazottnak kell lennie
* ```XHTML``` elemeket mindig megfelelően le kell zárni, a megfelő záró taggel
* ```XHTML``` elemeknek kis betűvel kell lennie írva
* ```XHTML``` dokumentumnak csak egy gyökér eleme lehet


### ```XHTML``` Attribútumok


* Az attribútum neveket kis betűvel kell írni
* Az attribútum értékeket idézőjelek közé kell írni
* Az attribútúmok értékeinek minimalizálása tilos


### ```<!DOCTYPE ...>``` megadása kötelező


Az XHTML dokumentumnak kell, hogy meg legyen adva az XHTML DOCTYPE deklaráció.

A teljes [DOCTYPE](https://www.w3schools.com/tags/tag_doctype.asp) lista itt található.

A ```<html>```, ```<head>```, ```<title>```, and ```<body>``` elemeknek szerepelnie kell és az ```xmlns``` attribútum a ```<html>``` tagen belül kell, hogy definiálja a megfelelő __xml névteret__ (_xml namespace_) a dokumentum számára.

Az alábbi példa egy minimális megvalósítása az XHTML dokumentumnak.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Title of document</title>
</head>
<body>

</body>
</html>
```


### ```XHTML``` elemeknek megfelelően beágyazottnak kell lennie


```HTML```-ben elfogadott a nem megfelelő beágyazás is, mint például:

```html
<b><i>This text is bold and italic</b></i>
```

```XHTML``` esetében azonban megfelően kell egymásba ágyaznunk a tageket, megfelő sorrendben kell lezárnunk őket:

```html
<b><i>This text is bold and italic</i></b>
```


### ```XHTML``` elemeket mindig megfelelően le kell zárni, a megfelő záró taggel


Helytelen:

```html
<p>This is a paragraph
<p>This is another paragraph
```

Helyes:

```html
<p>This is a paragraph</p>
<p>This is another paragraph</p>
```

Azokat az elemeket, melyeknek nincs külön záró tagje is megfelelően le kell zárni a ```/``` operátor segítségével.

Helytelen:

```html
A break: <br>
A horizontal rule: <hr>
An image: <img src="happy.gif" alt="Happy face">
```

Helyes:

```html
A break: <br />
A horizontal rule: <hr />
An image: <img src="happy.gif" alt="Happy face" />
```


### ```XHTML``` elemeknek kis betűvel kell lennie írva


Helytelen:

```html
<BODY>
<P>This is a paragraph</P>
</BODY>
```

Helyes:

```html
<body>
<p>This is a paragraph</p>
</body>
```

### Az ```XHTML``` attribútum neveket is kis betűvel kell írni

Helytelen:

```html
<table WIDTH="100%">
```

Helyes:

```html
<table width="100%">
```


### Az attribútum értékeket idézőjelek közé kell írni


Helytelen:

```html
<table width=100%>
```

Helyes:

```html
<table width="100%">
```


### Az attribútumok értékeinek minimalizálása tilos


Helytelen:

```html
<input type="checkbox" name="vehicle" value="car" checked />
<input type="text" name="lastname" disabled />
```

Helyes:

```html
<input type="checkbox" name="vehicle" value="car" checked="checked" />
<input type="text" name="lastname" disabled="disabled" />
```