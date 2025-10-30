import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [calcValues, setCalcValues] = useState({
    width: 10,
    height: 10,
    quantity: 1,
    stitches: 5000
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const calculatePrice = () => {
    const stitchPrice = 0.05;
    const setupFee = 500;
    const quantityDiscount = calcValues.quantity >= 100 ? 0.7 : calcValues.quantity >= 50 ? 0.8 : calcValues.quantity >= 10 ? 0.9 : 1;
    
    const pricePerItem = (calcValues.stitches * stitchPrice) * quantityDiscount;
    return Math.round(setupFee + (pricePerItem * calcValues.quantity));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Shirt',
      title: 'Корпоративная одежда',
      description: 'Вышивка логотипов на униформе',
      price: 'от 200₽'
    },
    {
      icon: 'Award',
      title: 'Шевроны и нашивки',
      description: 'Изготовление шеврон под заказ',
      price: 'от 150₽'
    },
    {
      icon: 'Gift',
      title: 'Подарки',
      description: 'Именная вышивка на подарках',
      price: 'от 300₽'
    },
    {
      icon: 'Palette',
      title: 'Дизайн макета',
      description: 'Оцифровка любого изображения',
      price: 'от 500₽'
    }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/5641f4b0-081c-430e-baa8-c735874f10dc/files/d52caf22-5cea-4316-ba07-ee68110f0699.jpg',
      title: 'Вышивка логотипа на одежде'
    },
    {
      url: 'https://cdn.poehali.dev/projects/5641f4b0-081c-430e-baa8-c735874f10dc/files/91161135-115f-49b5-a985-8faea9f4fdb5.jpg',
      title: 'Профессиональное оборудование'
    },
    {
      url: 'https://cdn.poehali.dev/projects/5641f4b0-081c-430e-baa8-c735874f10dc/files/ea24a2a3-00f4-435b-96ec-e091f8bfa7ab.jpg',
      title: 'Примеры работ'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight">ВЫШИВКА</h1>
          <div className="flex gap-6 items-center">
            <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
            <a href="#gallery" className="text-sm hover:text-primary transition-colors">Работы</a>
            <a href="#calculator" className="text-sm hover:text-primary transition-colors">Калькулятор</a>
            <Button size="sm" className="rounded-none">Связаться</Button>
          </div>
        </div>
      </nav>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-1 border border-foreground/20 text-xs tracking-widest">
                МАШИННАЯ ВЫШИВКА
              </div>
              <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight leading-none">
                Точная<br/>вышивка
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-md">
                Профессиональная машинная вышивка логотипов и дизайнов на любых тканях
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="rounded-none">
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="rounded-none">
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative h-[600px]">
              <img 
                src={gallery[0].url}
                alt="Машинная вышивка" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black mb-2">300+</div>
              <div className="text-sm text-muted-foreground">Выполненных заказов</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">1-3</div>
              <div className="text-sm text-muted-foreground">Дня изготовление</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Качество печати</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Вариантов дизайна</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4" id="technology">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] order-2 lg:order-1">
              <img 
                src={gallery[1].url}
                alt="Процесс вышивки" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-black mb-8 tracking-tight">Процесс</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-foreground pl-6">
                  <div className="text-sm text-muted-foreground mb-2">ШАГ 01</div>
                  <h4 className="font-bold mb-2 text-lg">Оцифровка дизайна</h4>
                  <p className="text-muted-foreground">Преобразование изображения в формат для вышивальной машины</p>
                </div>

                <div className="border-l-2 border-foreground pl-6">
                  <div className="text-sm text-muted-foreground mb-2">ШАГ 02</div>
                  <h4 className="font-bold mb-2 text-lg">Подбор ниток</h4>
                  <p className="text-muted-foreground">Выбор качественных ниток нужных цветов для вашего дизайна</p>
                </div>

                <div className="border-l-2 border-foreground pl-6">
                  <div className="text-sm text-muted-foreground mb-2">ШАГ 03</div>
                  <h4 className="font-bold mb-2 text-lg">Вышивка</h4>
                  <p className="text-muted-foreground">Точная машинная вышивка на профессиональном оборудовании</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30" id="services">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-black mb-16 tracking-tight">Услуги</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="bg-white border border-border p-8 mb-4 transition-all hover:border-foreground">
                  <Icon name={service.icon} size={32} className="mb-4" />
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-lg font-bold">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4" id="gallery">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-5xl font-black mb-16 tracking-tight">Работы</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {gallery.map((item, idx) => (
              <div key={idx} className="relative aspect-[3/4] overflow-hidden group cursor-pointer">
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-6">
                  <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-muted/30" id="calculator">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-black mb-16 tracking-tight text-center">Калькулятор</h2>

          <Card className="border-2 rounded-none">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label htmlFor="width" className="text-sm mb-2 block">Размер вышивки (см)</Label>
                  <Input 
                    id="width"
                    type="number" 
                    value={calcValues.width}
                    onChange={(e) => setCalcValues({...calcValues, width: Number(e.target.value)})}
                    className="rounded-none"
                    placeholder="Ширина"
                  />
                </div>
                <div>
                  <Label htmlFor="height" className="text-sm mb-2 block">&nbsp;</Label>
                  <Input 
                    id="height"
                    type="number" 
                    value={calcValues.height}
                    onChange={(e) => setCalcValues({...calcValues, height: Number(e.target.value)})}
                    className="rounded-none"
                    placeholder="Высота"
                  />
                </div>
                <div>
                  <Label htmlFor="stitches" className="text-sm mb-2 block">Количество стежков</Label>
                  <Input 
                    id="stitches"
                    type="number" 
                    value={calcValues.stitches}
                    onChange={(e) => setCalcValues({...calcValues, stitches: Number(e.target.value)})}
                    className="rounded-none"
                  />
                  <p className="text-xs text-muted-foreground mt-2">Примерно 5000-10000 стежков на дизайн</p>
                </div>
                <div>
                  <Label htmlFor="quantity" className="text-sm mb-2 block">Тираж</Label>
                  <Input 
                    id="quantity"
                    type="number" 
                    value={calcValues.quantity}
                    onChange={(e) => setCalcValues({...calcValues, quantity: Number(e.target.value)})}
                    className="rounded-none"
                  />
                  <p className="text-xs text-muted-foreground mt-2">От 10 шт — скидка 10%, от 50 шт — 20%</p>
                </div>
              </div>

              <div className="bg-foreground text-background p-8 text-center">
                <p className="text-sm mb-2 opacity-70">Примерная стоимость</p>
                <p className="text-5xl font-black mb-4">{calculatePrice()} ₽</p>
                <p className="text-xs opacity-70">Включая оцифровку макета. Точная стоимость после согласования</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-foreground text-background" id="contact">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-black mb-16 tracking-tight text-center">Контакты</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm mb-2 block text-background">Имя</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/50"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm mb-2 block text-background">Телефон</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="rounded-none bg-background/10 border-background/20 text-background placeholder:text-background/50"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm mb-2 block text-background">Сообщение</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="rounded-none min-h-32 bg-background/10 border-background/20 text-background placeholder:text-background/50"
                    placeholder="Детали заказа..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-none bg-background text-foreground hover:bg-background/90">
                  Отправить
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-sm mb-2 opacity-70">ТЕЛЕФОН</div>
                <div className="text-2xl font-bold">+7 (999) 123-45-67</div>
              </div>
              <div>
                <div className="text-sm mb-2 opacity-70">EMAIL</div>
                <div className="text-2xl font-bold">info@dtf-print.ru</div>
              </div>
              <div>
                <div className="text-sm mb-2 opacity-70">АДРЕС</div>
                <div className="text-2xl font-bold">Москва, ул. Примерная, 1</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8 px-4 bg-white">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">© 2024 ВЫШИВКА</p>
        </div>
      </footer>
    </div>
  );
}