if(idade == 1 ){
                   return idade + ' Anos, ' + idadeMes + ' meses' + idadeDia + ' e dias.';
                }

                if(idadeMes == 1){
                    return idade + ' Anos, ' + idadeMes + ' mês e ' + idadeDia + ' dias.';
               }

              if(idadeDia == 1){
                  return idade + ' Anos, ' + idadeMes + ' mês e ' + idadeDia + ' dia.';
               }

                /* Se for verdadeiro o dia mes ano */
               if(idade == 1){
                 if (idadeMes == 1){
                   if (idadeDia ==1){
                       return idade + ' Ano, ' + idadeMes + ' mês e ' + idadeDia + ' dia.';
                }else{
                    //Se a idade > 0 e mes == 0 e  dia == 0
                    if(idade > 0 ){ 
                        if(idadeMes == 0){
                            if(idadeDia ==0){
                               return idade + ' anos.';
                            }
                        }
                    }
            }
        }
    }        