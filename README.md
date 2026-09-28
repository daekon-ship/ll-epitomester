# L+L Építőmester — prémium weboldal

Modern, gyors, statikus egyoldalas bemutatkozó oldal a **L+L Építőmester** számára.
Nincs build-lépés és nincs függőség: tiszta HTML + CSS + JavaScript.

**Élő oldal:** https://daekon-ship.github.io/ll-epitomester/

## Fájlok

| Fájl | Szerep |
|---|---|
| `index.html` | Teljes oldalstruktúra, magyar tartalom, SEO meta + JSON-LD |
| `styles.css` | Design rendszer (színek, tipográfia, komponensek, reszponzivitás) |
| `main.js` | Ikonok, animációk, mobilmenü, szűrő, before/after, lightbox, űrlap |
| `favicon.svg` | Márka-jelvény favicon |

## Üzemeltetés

Bármelyik statikus tárhelyre felmásolható (pl. tárhely-szolgáltató, Netlify, Vercel,
GitHub Pages). Nincs fordítás: a `index.html` + `styles.css` + `main.js` + `favicon.svg`
fájlok feltöltése után azonnal működik.

## Interakciók, amiket az oldal tud

- Olvasásjelző sáv a lap tetején, scrollspy a navigációban
- Vissza-a-tetejére gomb, mobilon sticky Hívás / Ajánlat sáv (safe-area tudatos)
- Előtte–utána csúszka egérrel, érintéssel és billentyűzettel
- Lightbox nagyítás, kategóriaszűrő, animált FAQ, mailto-alapú ajánlatkérő űrlap
- Belépő animációk `IntersectionObserver`-rel, `prefers-reduced-motion` tisztelettel

## Placeholder-rendszer (mit cserélj le később)

Az oldal mindenhol kulturált, a designba illeszkedő helykitöltőket használ. Keresésre:

| Placeholder | Hol |
|---|---|
| `[IDE JÖN KIEMELT MUNKAFOTÓ]` | Hero nagy kép |
| `[IDE JÖN REFERENCIAPROJEKT]` | Referencia kártyák |
| `[IDE JÖN ELŐTTE KÉP]` / `[IDE JÖN UTÁNA KÉP]` | Előtte–utána modul |
| `[IDE JÖN RÖVID CÉGBEMUTATKOZÁS]` | Rólunk szekció |
| `[IDE JÖN SZOLGÁLTATÁSI TERÜLET]` | Kapcsolat + GYIK |
| `[IDE JÖN TOVÁBBI KÉP]` | Rólunk képe |

### Kép cseréje

A képhelyek `.photo-slot` blokkok. Egy valódi kép így kerül be:

1. Az `index.html`-ben keresd meg a képhelyet (a `[IDE JÖN …]` felirat alapján).
2. A `.photo-slot` elem **belsejébe** szúrd be: `<img src="munka-01.jpg" alt="Leírás a munkáról">`
3. A `[IDE JÖN …]` feliratot (`figcaption` / `span.photo-slot__label`) töröld.
4. Az `styles.css` végére nem kell semmi — az `.photo-slot img` már kezelt formázást kap (lendület: `object-fit: cover`, teljes méret).

A `media` blokkok (referenciakártyák) fejlécében lévő `data-lightbox` attribútumot
érintetlenül hagyd — a nagyítás automatikusan működik a beillesztett képekkel is.

## SEO

- Erős, kulcsszavas `H1`, logikus `H2`/`H3` hierarchia, szemantikus HTML5.
- Meta title + description, Open Graph adatok, canonical URL.
- JSON-LD (`HomeAndConstructionBusiness`) strukturált adat a telefonszámmal, e-maillel és szolgáltatásokkal.
- Minden képhelynek van magyar `aria-label`-je / alt-ja — a valódi képek beszúrásakor ezt finomítsd.

## Design rendszer röviden

- **Színek:** antracit `#22262B` · grafitszürke `#12151A` · törtfehér `#F6F3EE` · terrakotta `#B4562E`
- **Fontok:** Sora (címek) + Archivo (törzs) — Google Fonts
- **Irány:** világos alap, sötét kontraszt-szekciók, terrakotta akcentus, szellős spacing, finom hover- és belépő animációk

© 2026 L+L Építőmester
