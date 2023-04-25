> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Vervoerregio website
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Op deze website kunt u checken of een pagina van één van de organisaties dat met Vervoerregio Amsterdam toegankelijk zijn of niet.

## Inhoudsopgave

   ### Beschrijving
  
  Op onze website kunt u checken of één pagina van de websites van de orginasitie dat met vervoerregio werken togankelijk is.
 
 link naar de Live website:
 https://wicked-pumps-bat.cyclic.app/
 
 Dit is de Home pagina:
 
<img width="546" alt="image" src="https://user-images.githubusercontent.com/81859699/234366435-1ca00362-5365-4e5b-8555-1305ea809518.png">

De pagina waar de toolboard zich bevindt "Is het toegankelijk?":

<img width="484" alt="image" src="https://user-images.githubusercontent.com/81859699/234366593-528a7c67-e1d8-46c0-b7aa-6661074f1466.png">

De pagina waarin u de website warmee u een website van een organisatie kunt posten:

<img width="491" alt="image" src="https://user-images.githubusercontent.com/81859699/234366747-3fc03c8a-c958-4111-b515-f9416fb1ddbc.png">


 
 
De website is gebouwd met ejs en Node.
Door middel van een nested forEach-loop worden alle richtlijnen per principe en de projecten (urls) uit de Vervoerregio Amsterdam API gehaald.

const url = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1/principes'

  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Gebruik
De user story waarop de website is gebaseerd :

Als gebruiker wil ik detail informatie over een toegankelijkheidsrichtlijn bekijken, om te beoordelen of mijn website/app voldoet aan de richtlijn. Na dat ik de userstory had gekozen ben ik aan de slag gegaan met de opdracht.

## Kenmerken
Progressive enhancement
Progressive enhancement is een methode om websites of applicaties te bouwen waarbij je begint met een basisversie die voor iedereen toegankelijk is en vervolgens extra functies toevoegt voor gebruikers met betere apparaten of browsers. Zo zorg je ervoor dat alle gebruikers de website kunnen gebruiken.

De basisversie van de website is ontworpen om te werken op alle apparaten en browsers, ongeacht hun capaciteiten, en omvat alle essentiële inhoud en functionaliteit. Vervolgens worden er extra functies toegevoegd aan de website om de gebruikerservaring te verbeteren voor gebruikers met meer capabele apparaten of browsers, zoals animaties, geavanceerde lay-outs of interactieve functies.
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->

## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
U kunt bijdragen aan deze project bij het forken van mijn repository 

## Bronnen



## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
