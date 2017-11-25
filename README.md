# twit_bot
Program to search for tweets by location and radius;
The location returns a lat/long via the geocoder api, which then passes into a simple twitter search function.

To search, use: (_ = space)
location_query_#

for example,

atlanta baseball 5

, where 5 is the radius around the search area in miles.

This program was created in order to return tweets more specific to a location of an event. For example,

"saqueo_santa_teresa_1" would return tweets about looting in the santa teresa barrio of caracas, venezuela:

RT @DolarToday: ¡EL HARTAZO! Larga cola para comprar harina de maíz en Yaracuy termina en saqueo -► https://t.co/b7BNYmF6vd https://t.co/Q3…
RT @may_rondon: Un black friday en Venezuela es un saqueo donde te ayuda la Guardia Nacional.
RT @CFKArgentina: El próximo miércoles 29 a las 15 horas, lxs trabajadorxs de distintas centrales sindicales y gremios se van a movilizar a…
