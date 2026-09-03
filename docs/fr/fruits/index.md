---
title: Fruits
---

# Fruits

Fruits de patch (le raisin est sur la page [Serre](/fr/greenhouse/)). **Prix graine** = coût au marché.

<script setup>
const rows = [{"id":"tomato","name":"Tomato","href":"/fr/fruits/tomato","icon":"/icons/tomato.webp","seasons":["spring","autumn"],"sell":"2","time":"2 h","seedPrice":"5","extra":"Oui"},{"id":"lemon","name":"Lemon","href":"/fr/fruits/lemon","icon":"/icons/lemon.webp","seasons":["summer","winter"],"sell":"6","time":"4 h","seedPrice":"15","extra":"Non"},{"id":"blueberry","name":"Blueberry","href":"/fr/fruits/blueberry","icon":"/icons/blueberry.png","seasons":["spring","winter"],"sell":"12","time":"6 h","seedPrice":"30","extra":"Oui"},{"id":"orange","name":"Orange","href":"/fr/fruits/orange","icon":"/icons/orange.png","seasons":["spring","summer"],"sell":"18","time":"8 h","seedPrice":"50","extra":"Non"},{"id":"apple","name":"Apple","href":"/fr/fruits/apple","icon":"/icons/apple.png","seasons":["autumn","winter"],"sell":"25","time":"12 h","seedPrice":"70","extra":"Non"},{"id":"banana","name":"Banana","href":"/fr/fruits/banana","icon":"/icons/banana.png","seasons":["summer","autumn"],"sell":"25","time":"12 h","seedPrice":"70","extra":"Oui"},{"id":"celestine","name":"Celestine","href":"/fr/fruits/celestine","icon":"/icons/celestine.webp","seasons":["full-moon"],"sell":"200","time":"6 h","seedPrice":"300","extra":"Oui"},{"id":"lunara","name":"Lunara","href":"/fr/fruits/lunara","icon":"/icons/lunara.webp","seasons":["full-moon"],"sell":"500","time":"12 h","seedPrice":"750","extra":"Oui"},{"id":"duskberry","name":"Duskberry","href":"/fr/fruits/duskberry","icon":"/icons/duskberry.webp","seasons":["full-moon"],"sell":"1000","time":"24 h","seedPrice":"1250","extra":"Oui"}];
</script>

<ProduceTable locale="fr" kind="fruits" :rows="rows" />

---

_Données extraites de `fruits.ts` @ `3de9b18`. Wiki fan non officiel._
