/*! 23.0.1.0 */
/*! VersionVI: 01F250083h x */
function WDVignette(n,t,i,r,u){if(arguments.length){WDImage.prototype.constructor.apply(this,arguments);var f=u[2],e=u[3];f?(this.m_bCelluleUtilisateur=!0,this.m_sAliasCellule=f,this.m_sAliasGrandeImage=e):(this.m_bCelluleUtilisateur=!1,this.m_sAliasCellule=n+this.ms_sSuffixeHote,this.m_sAliasGrandeImage=n+this.ms_sSuffixeGrandeImage)}}WDVignette.prototype=new WDImage;WDVignette.prototype.constructor=WDVignette;WDVignette.prototype.ms_sSuffixeGrandeImage="_DIMG";WDVignette.prototype.Init=function(){if(WDImage.prototype.Init.apply(this,arguments),!this.m_bCelluleUtilisateur){var n=this;this.m_fChargementTermine=function(t){n.__ChargementTermine(t||event)}}};WDVignette.prototype._vLiaisonHTML=function(){WDImage.prototype._vLiaisonHTML.apply(this,arguments);this.m_oCellule=document.getElementById(this.m_sAliasCellule);this.m_oGrandeImage=document.getElementById(this.m_sAliasGrandeImage)};WDVignette.prototype._vOnResize=function(){WDImage.prototype._vOnResize.apply(this,arguments);this._bGrandeImageAffichee()};WDVignette.prototype._vbGetDefilementEffectif=function(){return WDImage.prototype._vbGetDefilementEffectif.apply(this,arguments)&&!this._bGrandeImageAffichee()};WDVignette.prototype._bGrandeImageAffichee=function(){return this.m_oGrandeImage?clWDUtil.bEstDisplay(this.m_oGrandeImage,document,!0):!1};WDVignette.prototype.__PrepareGrandeImage=function(){if(!this.m_bCelluleUtilisateur){var n=this.m_oGrandeImage;UnhookOnXXX(n,"onreadystatechange","load",this.m_fChargementTermine);this.m_oGrandeImage=document.createElement("img");n=n.parentNode.replaceChild(this.m_oGrandeImage,n)}};WDVignette.prototype.__AfficheGrandeImage=function(n){this.m_bCelluleUtilisateur||(HookOnXXX(this.m_oGrandeImage,"onreadystatechange","load",this.m_fChargementTermine),this.m_oCellule.style.visibility="hidden");this.m_oGrandeImage.src=n};WDVignette.prototype.__ChargementTermine=function(){if(!bIE||"complete"==this.m_oGrandeImage.readyState){var f=Math.min(document.body.scrollWidth,document.body.clientWidth)-60,e=Math.min(document.body.scrollHeight,document.body.clientHeight)-60,n=Math.max(this.m_oGrandeImage.offsetWidth,1),t=Math.max(this.m_oGrandeImage.offsetHeight,1),o=Math.max(n-f,0),s=Math.max(t-e,0),i=o/n,r=s/t,u=!1;i>r?(u=!0,n=f,t=t*(1-i)):i<r&&(u=!0,t=e,n=n*(1-r));u&&(this.m_oGrandeImage.style.width=n+"px",this.m_oGrandeImage.style.height=t+"px");this.nSetTimeout(this.__ChargementTermineRecentre,clWDUtil.ms_oTimeoutImmediat)}};WDVignette.prototype.__ChargementTermineRecentre=function(){clWDUtil.RecentreDialogue(this.m_sAliasCellule);clWDUtil.SetDisplay(this.m_oCellule,!0);this.m_oCellule.style.visibility="inherit"};WDVignette.prototype.__FermeGrandeImage=function(){this.m_bCelluleUtilisateur||(this.m_oGrandeImage.style.src="",this.m_oGrandeImage.style.width="1px",this.m_oGrandeImage.style.height="1px",clWDUtil.SetDisplay(this.m_oCellule,!1))};WDVignette.prototype.sSetOnclickLienParent=function(n,t){var i=this;return n.onclick=null,n.onclick=function(){i.ImageAffiche(t)},t};WDVignette.prototype.ImageAffiche=function(n,t,i,r){if(t&&i&&r&&!this.m_bCelluleUtilisateur&&$(i).closest(".wbGalerie").hasClass("wbGaleriePleinEcranClicFond")){i.wbGalerieClicVignetteEnCours=n;return}this.__PrepareGrandeImage();clWDUtil.CelluleAfficheDialogue(this.m_sAliasCellule,document,5,_GFI_A_,_GFI_T_);this.__AfficheGrandeImage(n)};WDVignette.prototype.ImageFerme=function(){clWDUtil.CelluleFermeDialogue(this.m_sAliasCellule,document);this.__FermeGrandeImage()}