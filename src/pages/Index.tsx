import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [calcValues, setCalcValues] = useState({
    width: 30,
    height: 40,
    quantity: 1,
    colors: 'full'
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const calculatePrice = () => {
    const basePrice = 150;
    const sizeMultiplier = (calcValues.width * calcValues.height) / 1200;
    const colorMultiplier = calcValues.colors === 'full' ? 1.5 : 1;
    const quantityDiscount = calcValues.quantity >= 10 ? 0.8 : calcValues.quantity >= 5 ? 0.9 : 1;
    
    return Math.round(basePrice * sizeMultiplier * colorMultiplier * quantityDiscount * calcValues.quantity);
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
      title: 'Печать на футболках',
      description: 'Яркая и долговечная печать на любых футболках',
      price: 'от 300₽'
    },
    {
      icon: 'ShoppingBag',
      title: 'Печать на сумках',
      description: 'Стильные принты на эко-сумках и шопперах',
      price: 'от 400₽'
    },
    {
      icon: 'ShieldCheck',
      title: 'Печать на худи',
      description: 'Качественные изображения на толстовках',
      price: 'от 500₽'
    },
    {
      icon: 'Sparkles',
      title: 'Индивидуальный дизайн',
      description: 'Создание уникальных макетов под ваши задачи',
      price: 'от 1000₽'
    }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/5641f4b0-081c-430e-baa8-c735874f10dc/files/13c53638-217b-4f69-a73d-3aa2fb4d6521.jpg',
      title: 'Яркий принт на футболке'
    },
    {
      url: 'https://cdn.poehali.dev/projects/5641f4b0-081c-430e-baa8-c735874f10dc/files/6390c017-8c83-4c06-965b-4a0ce09547d0.jpg',
      title: 'Процесс DTF-печати'
    },
    {
      url: 'https://cdn.poehali.dev/projects/5641f4b0-081c-430e-baa8-c735874f10dc/files/c3e76af2-0fa8-4613-9a38-95c5b0bf5e0c.jpg',
      title: 'Примеры готовых работ'
    }
  ];

  const advantages = [
    { icon: 'Zap', title: 'Высокое качество', text: 'Яркие насыщенные цвета' },
    { icon: 'Shield', title: 'Долговечность', text: 'Не выцветает после стирки' },
    { icon: 'Palette', title: 'Любые цвета', text: 'Полноцветная печать' },
    { icon: 'Clock', title: 'Быстро', text: 'Изготовление за 1-3 дня' }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto relative z-10 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
              DTF-печать нового поколения
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Яркая печать<br />на любых тканях
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Технология Direct to Film — это качественная и долговечная печать
              с яркими насыщенными цветами на любых видах текстиля
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={adv.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground">{adv.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="technology">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Что такое DTF-печать?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Direct to Film — современная технология переноса изображения на текстиль
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="border-l-4 border-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Печать на пленке</h4>
                      <p className="text-sm text-muted-foreground">Изображение печатается на специальной DTF-пленке с высоким разрешением</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-secondary">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-secondary">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Нанесение клеевого слоя</h4>
                      <p className="text-sm text-muted-foreground">На пленку наносится специальный порошковый клей для надежной фиксации</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-accent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-accent">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Термоперенос на ткань</h4>
                      <p className="text-sm text-muted-foreground">Пленка переносится на изделие под температурой и давлением термопресса</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src={gallery[1].url}
                alt="DTF процесс" 
                className="relative rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-muted/50 to-primary/5" id="services">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Печатаем на любых видах текстиля</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="group hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="gallery">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Галерея работ
            </h2>
            <p className="text-lg text-muted-foreground">Примеры наших DTF-принтов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer">
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <h3 className="text-white font-bold text-xl">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30" id="calculator">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Калькулятор стоимости</h2>
            <p className="text-lg text-muted-foreground">Рассчитайте примерную стоимость вашего заказа</p>
          </div>

          <Card className="border-2 shadow-xl">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <Label htmlFor="width" className="text-base">Ширина принта (см)</Label>
                  <Input 
                    id="width"
                    type="number" 
                    value={calcValues.width}
                    onChange={(e) => setCalcValues({...calcValues, width: Number(e.target.value)})}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="height" className="text-base">Высота принта (см)</Label>
                  <Input 
                    id="height"
                    type="number" 
                    value={calcValues.height}
                    onChange={(e) => setCalcValues({...calcValues, height: Number(e.target.value)})}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="quantity" className="text-base">Количество (шт)</Label>
                  <Input 
                    id="quantity"
                    type="number" 
                    value={calcValues.quantity}
                    onChange={(e) => setCalcValues({...calcValues, quantity: Number(e.target.value)})}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">От 5 шт — скидка 10%, от 10 шт — 20%</p>
                </div>
                <div>
                  <Label htmlFor="colors" className="text-base">Тип печати</Label>
                  <select 
                    id="colors"
                    value={calcValues.colors}
                    onChange={(e) => setCalcValues({...calcValues, colors: e.target.value})}
                    className="w-full mt-2 flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="full">Полноцветная</option>
                    <option value="mono">Монохромная</option>
                  </select>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white text-center">
                <p className="text-lg mb-2 opacity-90">Примерная стоимость заказа</p>
                <p className="text-5xl font-black mb-4">{calculatePrice()} ₽</p>
                <p className="text-sm opacity-75">Точная стоимость рассчитывается после согласования макета</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-primary via-secondary to-accent text-white" id="contact">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Оставить заявку</h2>
            <p className="text-xl text-white/90">Свяжемся с вами в течение 15 минут</p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base">Ваше имя</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="mt-2"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base">Телефон</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="mt-2"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-base">Комментарий к заказу</Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="mt-2 min-h-32"
                    placeholder="Опишите, что хотите напечатать: размер, количество, детали макета..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-lg py-6">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Icon name="Phone" size={32} className="mx-auto mb-3" />
              <p className="font-bold mb-1">Телефон</p>
              <p className="text-white/80">+7 (999) 123-45-67</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Icon name="Mail" size={32} className="mx-auto mb-3" />
              <p className="font-bold mb-1">Email</p>
              <p className="text-white/80">info@dtf-print.ru</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Icon name="MapPin" size={32} className="mx-auto mb-3" />
              <p className="font-bold mb-1">Адрес</p>
              <p className="text-white/80">Москва, ул. Примерная, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">© 2024 DTF-Print. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
