import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface HeaderProps {
  showBackButton?: boolean;
  showNavigation?: boolean;
}

const Header = ({ showBackButton = false, showNavigation = true }: HeaderProps) => {
  const sections = [
    { title: "Лучшее", href: "#" },
    { title: "Тренды", href: "#" },
    { title: "Истории", href: "#" },
    { title: "Инсайды", href: "#" }
  ];

  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={32} className="text-primary" />
            <div className="flex items-center space-x-2">
              <Link to="/" className="text-3xl font-bold hover:text-primary transition-colors">
                VOLT
              </Link>
              <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded border-2 border-primary">
                18+
              </div>
            </div>
          </div>

          {showNavigation && (
            <nav className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <a 
                  key={section.title}
                  href={section.href}
                  className="text-sm uppercase tracking-wider hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center space-x-4">
            {showBackButton ? (
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-primary"
                onClick={() => window.history.back()}
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
            ) : (
              <>
                <Button variant="ghost" className="text-foreground hover:text-primary">
                  <Icon name="User" size={18} className="mr-2" />
                  Войти
                </Button>
                <Button className="bg-primary hover:bg-red-700 text-primary-foreground">
                  <Icon name="UserPlus" size={18} className="mr-2" />
                  Регистрация
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground md:hidden">
                  <Icon name="Menu" size={20} />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;