import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Yeysoon', icon: '/icons/Github.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yeysoon/', icon: '/icons/Linkedin.png' },
    { name: 'YouTube', url: 'https://www.youtube.com/@yeysoon', icon: '/icons/Youtube.png' },
    { name: 'WhatsApp', url: 'https://wa.me/+50246402539', icon: '/icons/Whatsapp.png' },
    { name: 'Facebook', url: 'https://www.facebook.com/Yeysoonn/', icon: '/icons/Facebook.png' },
    { name: 'Instagram', url: 'https://www.instagram.com/yeyson_hernandez_/', icon: '/icons/Instagram.png' },
    { name: 'Twitch', url: 'https://www.twitch.tv/yeysoon', icon: '/icons/Twitch.png' },
    { name: 'Discord', url: 'https://discord.gg/fnVQsD2x', icon: '/icons/Discord.png' }
  ];

}
