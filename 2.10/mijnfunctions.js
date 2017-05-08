var euro_dollarkoers = 1.36;
var dollar_eurokoers = 0.74;
var euro_roebelkoers = 48.40;
var roebel_eurokoers = 0.02;

function exchange(bedrag, conversie){
    if (conversie == 'dol_eur' ){
        return (bedrag * euro_dollarkoers);
    }
    else if (conversie == 'eur_dol'){
        return(bedrag * dollar_eurokoers);
    }
    else if (conversie == 'rub_eur' ){
     return   (bedrag * euro_roebelkoers)
    };
    else if(conversie == 'eur_rub'){
        return (bedrag * roebel_eurokoers)
    };

}