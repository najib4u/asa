/*! 23.0.2.0 */
/*! VersionVI: 01F250083h x */
function WDJauge(){arguments.length&&WDChampParametres.prototype.constructor.apply(this,arguments)}function WDJaugeNavigateur(n){n&&(this.m_fCallback=n)}function WDJaugeNavigateurBornes(n,t,i,r){WDJaugeNavigateur.prototype.constructor.apply(this,[n]);this.m_dBorneMaxBoucle=i;var u=(i-t)/r,f=parseInt(u,10);i=t+(f+1)*r;this.m_dBorneMin=t;this.m_dBorneMax=i;this.m_dPas=r;this.m_dValeur=t}function WDJaugeNavigateurTableau(n,t){WDJaugeNavigateur.prototype.constructor.apply(this,[n]);this.m_tabValeurs=t;this.m_nPosition=0}WDJauge.prototype=new WDChampParametres;WDJauge.prototype.constructor=WDJauge;WDJauge.ms_bOptimCalculeViaPourcentage=clWDUtil.bRWD||clWDUtil.bHTML5;WDJauge.prototype.Init=function(){WDChampParametres.prototype.Init.apply(this,arguments);clWDAJAXMain.bWDAJAXMainValide();this.__AfficheMAJComplete()};WDJauge.prototype._vLiaisonHTML=function(){WDChampParametres.prototype._vLiaisonHTML.apply(this,arguments);this.m_oCelluleExterne=this.oGetIDElement("EXT");this.m_oCelluleInterne=this.oGetElementById(document,"");this.m_oLibelle=document.getElementById("lz"+this.m_sAliasChamp);this.m_oLibelleInterne=this.m_oLibelle.getElementsByTagName("td")[0]};WDJauge.prototype._vAppliqueParametres=function(){WDChampParametres.prototype._vAppliqueParametres.apply(this,arguments);this.__JaugeNavigateurArrete();this.__OnMAJValeur(this.__oGetJaugeDonnees())};WDJauge.prototype.GetValeur=function(n,t,i){var r=this.__dGetValeur(this.__oGetJaugeDonnees());return WDChampParametres.prototype.GetValeur.apply(this,[n,r,i])};WDJauge.prototype.SetValeur=function(n,t){WDChampParametres.prototype.SetValeur.apply(this,arguments);var i=this.__oGetJaugeDonnees();return this.__SetValeur(i,t),this.__dGetValeur(i)};WDJauge.prototype.GetProp=function(n){switch(n){case this.XML_CHAMP_PROP_NUM_COULEUR:return clWDUtil.oGetCurrentStyle(this.m_oLibelleInterne).color;case this.XML_CHAMP_PROP_NUM_COULEURFOND:return clWDUtil.oGetCurrentStyle(this.m_oCelluleExterne).backgroundColor;case this.XML_CHAMP_PROP_NUM_BORNEMIN:return this.__oGetJaugeDonnees().vdBorneMin();case this.XML_CHAMP_PROP_NUM_BORNEMAX:return this.__oGetJaugeDonnees().vdBorneMax(!0);case this.XML_CHAMP_PROP_NUM_COULEURJAUGE:return clWDUtil.oGetCurrentStyle(this.m_oCelluleInterne).backgroundColor;default:return WDChampParametres.prototype.GetProp.apply(this,arguments)}};WDJauge.prototype.SetProp=function(n,t,i){var r,u,f;i=WDChampParametres.prototype.SetProp.apply(this,arguments);r=_JGE(this.m_sAliasChamp,document,!0);switch(n){case this.XML_CHAMP_PROP_NUM_HAUTEUR:return this.m_oCelluleExterne.style.height=i+"px",this.m_oCelluleInterne.style.height=i+"px",this.m_oLibelle.style.height=i+"px",i;case this.XML_CHAMP_PROP_NUM_LARGEUR:return this.m_oCelluleExterne.style.width=i+"px",this.m_oCelluleInterne.style.width=i*this.__dValeurPourcentage(this.__oGetJaugeDonnees())+"px",this.m_oLibelle.style.width=i+"px",r.getElementsByTagName("table")[0].width=i,r.getElementsByTagName("td")[0].width=i,r.style.width=i+"px",i;case this.XML_CHAMP_PROP_NUM_COULEUR:return this.m_oLibelleInterne.style.color=i,i;case this.XML_CHAMP_PROP_NUM_COULEURFOND:return this.m_oCelluleExterne.style.backgroundColor=i,i;case this.XML_CHAMP_PROP_NUM_BULLE:return this.m_oCelluleExterne.title=i,i;case this.XML_CHAMP_PROP_NUM_OPACITE:return u=r,f=this.m_oCelluleExterne,!1==clWDUtil.bEstFils(this.m_oCelluleExterne,r)&&(u=this.m_oCelluleExterne,f=r),clWDUtil.nSetOpacite(i,u),bIEQuirks9Max&&!clWDUtil.bBaliseEstTag(u,"div")&&clWDUtil.nSetOpacite(i,f),i;case this.XML_CHAMP_PROP_NUM_BORNEMIN:return this.__dSetBorne(i,!1);case this.XML_CHAMP_PROP_NUM_BORNEMAX:return this.__dSetBorne(i,!0);case this.XML_CHAMP_PROP_NUM_COULEURJAUGE:return this.m_oCelluleInterne.style.backgroundColor=i,i;default:return i}};WDJauge.prototype.OnDisplay=function(n,t){WDChampParametres.prototype.OnDisplay.apply(this,arguments);t&&this.m_oCelluleExterne&&clWDUtil.bEstFils(this.m_oCelluleExterne,n)&&this.__AfficheMAJComplete()};WDJauge.prototype._vOnResize=WDJauge.ms_bOptimCalculeViaPourcentage?clWDUtil.m_pfVide:function(){WDChampParametres.prototype._vOnResize.apply(this,arguments);this.__AfficheMAJComplete()};WDJauge.prototype.__OnMAJValeur=function(n){this._vSetValeurChampFormulaire(this.__dGetValeur(n));this.__AfficheMAJComplete()};WDJauge.prototype.__AfficheMAJComplete=function(){this.__AfficheInterne(!0)};WDJauge.prototype.__Affiche=function(){this.__AfficheInterne(this.m_nLargeurExterne===undefined)};WDJauge.prototype.__AfficheInterne=function(n){var r=this.__oGetJaugeDonnees(),t=this.__dValeurPourcentage(r),i;if(WDJauge.ms_bOptimCalculeViaPourcentage){if(this.m_dValeurPourcentageDessine==t)return;this.m_oCelluleInterne.style.width=t*100+"%";this.m_dValeurPourcentageDessine=t}else 0<t?(n&&(this.m_oCelluleInterne.style.position="absolute",this.m_nLargeurExterne=this._nGetOffsetWidth(this.m_oCelluleExterne),this.m_oCelluleInterne.style.position="static"),i=this.m_nLargeurExterne*Math.min(t,1)):(undefined!==this.m_nLargeurExterne&&delete this.m_nLargeurExterne,i=0),this.m_oCelluleInterne.style.width=i+"px";this.__AfficheLibelle(r)};WDJauge.prototype.__AfficheLibelle=function(n){var t="";this.m_oParametres.m_bAffichePourcentage&&(this.m_oParametres.m_bVideSiNull&&n.vdValeur()==0||(t=clWDUtil.sEncodeInnerHTML(n.vsValeurAffichee(this),!0,!1)));this.m_oLibelleInterne.innerHTML=t};WDJauge.prototype.__JaugeArrete=function(){this.__JaugeServeurArrete();this.__JaugeNavigateurArrete()};WDJauge.prototype.__oGetJaugeDonnees=function(){return this.m_oJaugeNavigateur?this.m_oJaugeNavigateur:this};WDJauge.prototype.__dGetValeur=function(n){return this!=n?this.vdBorneMin()+this.__dValeurPourcentage(n)*(this.vdBorneMax()-this.vdBorneMin()):n.vdValeur()};WDJauge.prototype.__SetValeur=function(n,t){var i=parseFloat(t);n.vdBorneMin()>i?i=n.vdBorneMin():n.vdBorneMax()<i&&(i=n.vdBorneMax());n.vSetValeur(i);this.__OnMAJValeur(n)};WDJauge.prototype.sFormateValeur=function(n){return parseInt(100*this.__dValeurPourcentage(n),10)+"%"};WDJauge.prototype.__dValeurPourcentage=function(n){return n.vdBorneMax()>n.vdBorneMin()?(n.vdValeur()-n.vdBorneMin())/(n.vdBorneMax()-n.vdBorneMin()):0};WDJauge.prototype.__JaugeServeurLance=function(n,t){this.__JaugeArrete();this.m_bArretAutomatique=t;var i=this;this.SetInterval("JaugeServeur",function(){i.__JaugeServeur()},n)};WDJauge.prototype.__JaugeServeurArrete=function(){this.AnnuleTimeXXX("JaugeServeur",!0);this.m_bArretAutomatique!==undefined&&delete this.m_bArretAutomatique};WDJauge.prototype.__JaugeServeur=function(){this.__bJaugeServeurMAJ()&&this.__Affiche()};WDJauge.prototype.__bJaugeServeurMAJ=function(){var i=clWDAJAXMain.oAJAXRecupereJauge(this.m_sAliasChamp),n,t;switch(i.m_eJauge){case 1:return!1;case 2:return n=this.m_oDonnees,t=i.m_oJauge,n.m_dValeur=t.m_dValeur,n.m_dBorneMin=t.m_dBorneMin,n.m_dBorneMax=t.m_dBorneMax,n.m_sValeurAffichee=t.m_sValeurAffichee,!0;case 0:default:return this.m_bArretAutomatique&&this.__JaugeServeurArrete(),!1}};WDJauge.prototype.__JaugeNavigateurLance=function(n){if(this.__JaugeArrete(),!n.vbFini()){this.m_oJaugeNavigateur=n;this._vSetValeurChampFormulaire(this.__dGetValeur(n));var t=this;this.SetInterval("JaugeNavigateur",function(){t.__JaugeNavigateur()},1)}};WDJauge.prototype.__JaugeNavigateurArrete=function(){this.AnnuleTimeXXX("JaugeNavigateur",!0);this.m_oJaugeNavigateur&&delete this.m_oJaugeNavigateur};WDJauge.prototype.__JaugeNavigateur=function(){var n=!1;this.m_oJaugeNavigateur&&!this.m_oJaugeNavigateur.vbFini()?(n=this.m_oJaugeNavigateur.bAction(),this.__OnMAJValeur(this.m_oJaugeNavigateur)):n=!0;n&&this.__JaugeNavigateurArrete()};WDJauge.prototype.__dSetBorne=function(n,t){var i=this.__oGetJaugeDonnees();n=parseFloat(n);t?i.vSetBorneMax(n):i.vSetBorneMin(n);this.__SetValeur(i,this.__dGetValeur(i))};WDJauge.prototype.JaugeActive=function(n,t){this.__JaugeServeurLance(n,t)};WDJauge.prototype.JaugeDesactive=function(){this.__JaugeArrete()};WDJauge.prototype.JaugeExecute=function(){var n;switch(typeof arguments[1]){case"object":n=new WDJaugeNavigateurTableau(arguments[0],arguments[1]);break;default:n=new WDJaugeNavigateurBornes(arguments[0],arguments[1],arguments[2],arguments.length>=4?arguments[3]:1)}this.__JaugeNavigateurLance(n)};WDJauge.prototype.vdValeur=function(){return this.m_oDonnees.m_dValeur};WDJauge.prototype.vSetValeur=function(n){this.m_oDonnees.m_dValeur=n;this.m_oDonnees.m_sValeurAffichee=this.sFormateValeur(this)};WDJauge.prototype.vSetBorneMin=function(n){this.m_oDonnees.m_dBorneMin=n};WDJauge.prototype.vSetBorneMax=function(n){this.m_oDonnees.m_dBorneMax=n};WDJauge.prototype.vdBorneMin=function(){return this.m_oDonnees.m_dBorneMin};WDJauge.prototype.vdBorneMax=function(){return this.m_oDonnees.m_dBorneMax};WDJauge.prototype.vsValeurAffichee=function(){return this.m_oDonnees.m_sValeurAffichee};WDJaugeNavigateur.prototype.bAction=function(){return this.m_fCallback(this._voArguement()),this._vSuivant(),this.vbFini()};WDJaugeNavigateur.prototype.vsValeurAffichee=function(n){return n.sFormateValeur(this)};WDJaugeNavigateur.prototype.vSetBorneMin=function(){};WDJaugeNavigateur.prototype.vSetBorneMax=function(){};WDJaugeNavigateurBornes.prototype=new WDJaugeNavigateur;WDJaugeNavigateurBornes.prototype.constructor=WDJaugeNavigateurBornes;WDJaugeNavigateurBornes.prototype.vdValeur=function(){return this.m_dValeur};WDJaugeNavigateurBornes.prototype.vSetValeur=function(n){this.m_dValeur=n};WDJaugeNavigateurBornes.prototype.vdBorneMin=function(){return this.m_dBorneMin};WDJaugeNavigateurBornes.prototype.vdBorneMax=function(n){return n?this.m_dBorneMaxBoucle:this.m_dBorneMax};WDJaugeNavigateurBornes.prototype._vSuivant=function(){this.m_dValeur+=this.m_dPas};WDJaugeNavigateurBornes.prototype.vbFini=function(){return this.m_dBorneMaxBoucle>=this.m_dBorneMin?this.m_dValeur>this.m_dBorneMaxBoucle:this.m_dValeur<this.m_dBorneMaxBoucle};WDJaugeNavigateurBornes.prototype._voArguement=function(){return this.m_dValeur};WDJaugeNavigateurTableau.prototype=new WDJaugeNavigateur;WDJaugeNavigateurTableau.prototype.constructor=WDJaugeNavigateurTableau;WDJaugeNavigateurTableau.prototype.vdValeur=function(){return this.m_nPosition};WDJaugeNavigateurTableau.prototype.vSetValeur=function(n){this.m_nPosition=parseInt(n,10)};WDJaugeNavigateurTableau.prototype.vdBorneMin=function(){return 0};WDJaugeNavigateurTableau.prototype.vdBorneMax=function(){return this.m_tabValeurs.length};WDJaugeNavigateurTableau.prototype._vSuivant=function(){this.m_nPosition++};WDJaugeNavigateurTableau.prototype.vbFini=function(){return this.m_nPosition>=this.m_tabValeurs.length};WDJaugeNavigateurTableau.prototype._voArguement=function(){return this.m_tabValeurs[this.m_nPosition]}