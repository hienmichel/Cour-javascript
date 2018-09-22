var mHT = Number(prompt("Entrez le montant hors taxe :" ));
var mTTC = (mHT * 19.6)/100 + mHT;
alert("le montant TTC est ="+mTTC);