import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useEffect } from "react";

const Article = () => {
  useEffect(() => {
    document.title = "Что надеть на летнюю свадьбу 2025: гид по мужскому стилю | VOLT";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Как одеться на летнюю свадьбу мужчине: гид 2025. Советы по тканям, цветам и стилю для пляжа, сада и вечерних церемоний.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Как одеться на летнюю свадьбу мужчине: гид 2025. Советы по тканям, цветам и стилю для пляжа, сада и вечерних церемоний.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-primary" />
              <div className="flex items-center space-x-2">
                <h1 className="text-3xl font-bold">VOLT</h1>
                <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded border-2 border-primary">
                  18+
                </div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary"
              onClick={() => window.history.back()}
            >
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
          </div>
        </div>
      </header>

      {/* Article Hero */}
      <section className="relative py-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary" className="bg-primary text-primary-foreground">
                  👔 Стиль
                </Badge>
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  📈 Тренды
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Что надеть на летнюю свадьбу: гид по стилю для мужчин 2025
              </h1>
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  <span>2 сентября 2025</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>8 мин чтения</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Eye" size={16} className="mr-2" />
                  <span>2.1k просмотров</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-12">
              <img 
                src="https://cdn.poehali.dev/files/fd1ecd87-5a0a-4557-97b4-114c911e2000.jpg"
                alt="Мужчина в стильном летнем костюме"
                className="w-full h-[400px] md:h-[600px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article Text */}
            <div className="prose prose-lg max-w-none text-foreground">
              <div className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Жара + дресс-код = настоящая головоломка. Летние свадьбы всегда требуют баланса: выглядеть элегантно, чувствовать себя комфортно и не превратиться в мокрую рубашку уже через полчаса. Будь то церемония на пляже, вечеринка в саду или чёрный галстук в июльский вечер — твой образ должен быть одновременно формальным, лёгким и стильным.
              </div>

              <div className="bg-card border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="text-lg font-medium">
                  В 2025 году акцент — на утончённую лёгкость: костюмы из дышащих тканей, спокойные тона с лёгкой игрой цвета и аксессуары, которые смотрятся дорого, но без излишеств.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-3">📌</span>
                Как читать дресс-код
              </h2>

              <div className="space-y-8">
                {/* Beach Formal */}
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="mr-3">🌴</span>
                    Пляжная свадьба (Beach Formal)
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li>Выбирай костюмы без жёсткой структуры из льна или хлопка в светлых оттенках: беж, серый, светло-голубой.</li>
                    <li>Рубашка — лёгкая, лучше из «техно»-тканей, которые держат форму и отводят влагу.</li>
                    <li>Галстук не обязателен, зато кожаные лоферы или замшевые драйверы придадут образу завершённость.</li>
                  </ul>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mt-4">
                    <p className="text-destructive font-medium">
                      🚫 <strong>Избегай:</strong> шлёпанцев и топсайдеров — это не пляжная вечеринка с коктейлями.
                    </p>
                  </div>
                </div>

                {/* Garden Party */}
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="mr-3">🌿</span>
                    Сад / Коктейль (Garden Party / Cocktail)
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li>Здесь можно позволить себе больше цвета: костюмы в оливковом, небесно-голубом или пастельно-розовом смотрятся свежо.</li>
                    <li>Лёгкая шерсть или хлопок — отличные варианты.</li>
                    <li>Дополняй образ рубашкой с узором или однотонным галстуком в тон.</li>
                  </ul>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mt-4">
                    <p className="text-destructive font-medium">
                      🚫 <strong>Избегай:</strong> блестящих синтетических тканей — они душные и плохо смотрятся на фото.
                    </p>
                  </div>
                </div>

                {/* Semi-Formal */}
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="mr-3">🎩</span>
                    Полуформальный стиль (Semi-Formal)
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li>Для вечерних и закрытых залов подойдут классические оттенки: тёмно-синий, графит, песочный.</li>
                    <li>Рубашка белая или небесно-голубая. Галстук можно надеть по ситуации.</li>
                    <li>Обувь — строгие дерби или монки с лёгким блеском.</li>
                  </ul>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mt-4">
                    <p className="text-destructive font-medium">
                      🚫 <strong>Избегай:</strong> слишком ярких аксессуаров. Один акцент (например, часы или галстук) — достаточно.
                    </p>
                  </div>
                </div>

                {/* Black Tie */}
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="mr-3">🕴</span>
                    Black Tie летом
                  </h3>
                  <ul className="space-y-3 text-lg">
                    <li>Да, смокинг летом — это норма. Главное — ткань. Лёгкая шерсть или смесь с шёлком в чёрном или тёмно-синем цвете.</li>
                    <li>Рубашка должна «дышать» и отводить влагу.</li>
                    <li>Лоферы из бархата или лаковые туфли, классическая бабочка, минимум запонок.</li>
                  </ul>
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg mt-4">
                    <p className="text-destructive font-medium">
                      🚫 <strong>Избегай:</strong> плохо сидящих прокатных смокингов и жёстких воротников «крылышками», если не идёшь в полный ретро-стиль.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 flex items-center mt-12">
                <span className="mr-3">✨</span>
                Летние правила стиля
              </h2>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg border mb-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span><strong>Посадка важнее всего.</strong> Костюм должен быть по фигуре, но не обтягивать.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span><strong>Чёрная рубашка — мимо.</strong> Летом она смотрится тяжеловато.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span><strong>Цвет — твой союзник.</strong> Пастель, приглушённые землистые тона, лёгкие узоры.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3 mt-1">•</span>
                    <span><strong>Ткань решает.</strong> Лен, лёгкий хлопок, тропическая шерсть или современные материалы, которые «дышат».</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="mr-3">🕶</span>
                Финальные штрихи
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card p-6 rounded-lg border">
                  <h4 className="font-bold text-lg mb-3">Ароматы и уход</h4>
                  <ul className="space-y-2">
                    <li>• Лёгкий цитрусовый парфюм</li>
                    <li>• Дезодорант-салфетки в кармане</li>
                    <li>• Матирующие платки — спасут в жару</li>
                  </ul>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h4 className="font-bold text-lg mb-3">Аксессуары</h4>
                  <ul className="space-y-2">
                    <li>• Очки с тёмными линзами</li>
                    <li>• Аккуратная стрижка</li>
                    <li>• Часы: кожа для дня, металл для вечера</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card border-l-4 border-primary p-8 rounded-r-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <span className="mr-3">💬</span>
                  Итог
                </h2>
                <p className="text-lg mb-4">
                  Летний свадебный стиль — это про умение соблюдать баланс между дресс-кодом, комфортом и твоей индивидуальностью. Одежда должна сидеть идеально, смотреться стильно и при этом позволять тебе чувствовать себя уверенно.
                </p>
                <p className="text-xl font-medium text-primary">
                  Самый стильный гость — не тот, кто надел самый дорогой костюм. А тот, кто выглядит так, будто родился для этого вечера.
                </p>
              </div>
            </div>

            {/* Share & Actions */}
            <div className="flex items-center justify-between pt-12 border-t border-border mt-12">
              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">Поделиться:</span>
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Icon name="Share" size={18} />
                </Button>
                <Button variant="ghost" size="sm" className="hover:text-primary">
                  <Icon name="Bookmark" size={18} />
                </Button>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Icon name="Heart" size={18} />
                <span>47</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Zap" size={28} className="text-primary" />
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold">VOLT</h3>
              <div className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded border border-primary">
                18+
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            ⚡ «Живи без правил.»
          </p>
          <p className="text-muted-foreground">
            &copy; 2025 VOLT журнал. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Article;