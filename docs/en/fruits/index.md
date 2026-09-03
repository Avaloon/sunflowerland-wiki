---
title: Fruits
---

# Fruits

Patch fruits (grapes are listed under [Greenhouse](/en/greenhouse/)). **Seed price** is the market cost.

<script setup>
const rows = [{"id":"tomato","name":"Tomato","href":"/en/fruits/tomato","icon":"/icons/tomato.webp","seasons":["spring","autumn"],"sell":"2","time":"2 h","seedPrice":"5","extra":"Yes"},{"id":"lemon","name":"Lemon","href":"/en/fruits/lemon","icon":"/icons/lemon.webp","seasons":["summer","winter"],"sell":"6","time":"4 h","seedPrice":"15","extra":"No"},{"id":"blueberry","name":"Blueberry","href":"/en/fruits/blueberry","icon":"/icons/blueberry.png","seasons":["spring","winter"],"sell":"12","time":"6 h","seedPrice":"30","extra":"Yes"},{"id":"orange","name":"Orange","href":"/en/fruits/orange","icon":"/icons/orange.png","seasons":["spring","summer"],"sell":"18","time":"8 h","seedPrice":"50","extra":"No"},{"id":"apple","name":"Apple","href":"/en/fruits/apple","icon":"/icons/apple.png","seasons":["autumn","winter"],"sell":"25","time":"12 h","seedPrice":"70","extra":"No"},{"id":"banana","name":"Banana","href":"/en/fruits/banana","icon":"/icons/banana.png","seasons":["summer","autumn"],"sell":"25","time":"12 h","seedPrice":"70","extra":"Yes"},{"id":"celestine","name":"Celestine","href":"/en/fruits/celestine","icon":"/icons/celestine.webp","seasons":["full-moon"],"sell":"200","time":"6 h","seedPrice":"300","extra":"Yes"},{"id":"lunara","name":"Lunara","href":"/en/fruits/lunara","icon":"/icons/lunara.webp","seasons":["full-moon"],"sell":"500","time":"12 h","seedPrice":"750","extra":"Yes"},{"id":"duskberry","name":"Duskberry","href":"/en/fruits/duskberry","icon":"/icons/duskberry.webp","seasons":["full-moon"],"sell":"1000","time":"24 h","seedPrice":"1250","extra":"Yes"}];
</script>

<ProduceTable locale="en" kind="fruits" :rows="rows" />

---

_Data extracted from `fruits.ts` @ `3de9b18`. Unofficial fan wiki._
