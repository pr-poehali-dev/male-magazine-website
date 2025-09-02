import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Footer = () => {
  const sections = [
    { title: "Лучшее", description: "Топ контент недели", href: "#" },
    { title: "Тренды", description: "Что сейчас актуально", href: "#" },
    { title: "Истории", description: "Реальные мужские истории", href: "#" },
    { title: "Инсайды", description: "Закулисная информация", href: "#" }
  ];

  const contacts = [
    { title: "О нас", href: "#" },
    { title: "Реклама", href: "#" },
    { title: "Контакты", href: "#" },
    { title: "Политика конфиденциальности", href: "#" }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", href: "#" },
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "Youtube", icon: "Youtube", href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={24} className="text-primary" />
              <Link to="/" className="text-xl font-bold hover:text-primary transition-colors">
                VOLT
              </Link>
              <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded border-2 border-primary">
                18+
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Мужской журнал о стиле, трендах и жизни
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Разделы</h3>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.title}>
                  <a
                    href={section.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Контакты</h3>
            <ul className="space-y-2">
              {contacts.map((contact) => (
                <li key={contact.title}>
                  <a
                    href={contact.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-foreground">Подписка</h3>
            <p className="text-sm text-muted-foreground">
              Получайте лучшие материалы на почту
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="px-3 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-red-700 transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 VOLT журнал. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;