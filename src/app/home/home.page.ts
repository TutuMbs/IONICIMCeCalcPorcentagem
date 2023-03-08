import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  n1: string='';
  res:number=0;
  n2: string='';
  resv:number=0;
  resm:string='';

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  homem(){
    this.res=(parseFloat(this.n1)*72.7)-58;
  }
  mulher(){
    this.res=(parseFloat(this.n1)*62.1)-44.7;
  }

  verificarRadio() {

    if(this.radioSelecionada === 'Pix'){
      this.resv=parseFloat(this.n2)*0.9;
    }
    else if(this.radioSelecionada === 'Débito'){
      this.resv=parseFloat(this.n2);
    }
    else{
      this.resv=parseFloat(this.n2)+(this.resv=parseFloat(this.n2)*0.1);
    }
this.radioSelecionada+this.n2;
    this.exibirToast();
    this.exibirAlerta();
  }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: 'forma de pagamento selecionada:'+this.radioSelecionada+'ﾠ'+'e ficou no total R$'+this.resv,
      duration: 7000,
    });
    toast.present();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'A forma de pagamento e valor final ficou:',
      message: 'forma de pagamento:'+this.radioSelecionada+'ﾠ'+'R$'+this.resv,
      buttons: ['OK']
    });
    alert.present();
  }

}