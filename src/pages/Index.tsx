import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"feed" | "chat">("chat");

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <Icon name="MessageCircle" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">Связь</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Приватный мессенджер для вашего круга</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              <Icon name="LogIn" className="w-4 h-4 mr-2" />
              Войти
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Зарегистрироваться
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="w-5 h-5" />
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                <Icon name="LogIn" className="w-4 h-4 mr-2" />
                Войти
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Зарегистрироваться
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Основной макет */}
      <div className="flex min-h-screen">
        {/* Панель серверов/пространств */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Icon name="MessageCircle" className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {[
            { icon: "Users", label: "Команда" },
            { icon: "Home", label: "Дом" },
            { icon: "Star", label: "Избранное" },
            { icon: "Rss", label: "Лента" },
          ].map((item, i) => (
            <div
              key={i}
              title={item.label}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2]"
            >
              <Icon name={item.icon} className="w-5 h-5 text-[#dcddde]" />
            </div>
          ))}
        </div>

        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}>
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">Связь</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <Icon name="X" className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 p-2 overflow-y-auto">
              {/* Личные сообщения */}
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronRight" className="w-3 h-3" />
                  <span>Личные сообщения</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {[
                    { name: "Анна", status: "В сети", avatar: "А", color: "from-pink-500 to-purple-500" },
                    { name: "Дмитрий", status: "Недавно", avatar: "Д", color: "from-blue-500 to-cyan-500" },
                    { name: "Ольга", status: "В сети", avatar: "О", color: "from-green-500 to-teal-500" },
                  ].map((user) => (
                    <div
                      key={user.name}
                      className="flex items-center gap-2 px-2 py-1.5 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <div className={`w-7 h-7 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center flex-shrink-0 relative`}>
                        <span className="text-white text-xs font-medium">{user.avatar}</span>
                        <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 ${user.status === "В сети" ? "bg-[#3ba55c]" : "bg-[#72767d]"} border-2 border-[#2f3136] rounded-full`}></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm truncate">{user.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Групповые чаты */}
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronRight" className="w-3 h-3" />
                  <span>Групповые чаты</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["# семья", "# друзья", "# работа", "# путешествия"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Icon name="Hash" className="w-4 h-4" />
                      <span className="text-sm">{channel.replace("# ", "")}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Лента */}
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <Icon name="ChevronRight" className="w-3 h-3" />
                  <span>Социальная сеть</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {[
                    { icon: "Rss", label: "Лента" },
                    { icon: "Image", label: "Фото и видео" },
                    { icon: "Music", label: "Музыка" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Icon name={item.icon} className="w-4 h-4" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Пользователь */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">В</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Вы</div>
                <div className="text-[#3ba55c] text-xs truncate flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-[#3ba55c] rounded-full"></div>
                  В сети
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Icon name="UserCircle" className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Icon name="Settings" className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область контента */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Icon name="Menu" className="w-5 h-5" />
              </Button>
              <Icon name="Hash" className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">друзья</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Общайся свободно — только ваш круг</span>
              <div className="ml-auto flex items-center gap-3 sm:gap-4">
                <div className="flex gap-1 rounded-lg bg-[#2f3136] p-1">
                  <button
                    onClick={() => setActiveTab("chat")}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${activeTab === "chat" ? "bg-[#5865f2] text-white" : "text-[#b9bbbe] hover:text-white"}`}
                  >
                    Чат
                  </button>
                  <button
                    onClick={() => setActiveTab("feed")}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${activeTab === "feed" ? "bg-[#5865f2] text-white" : "text-[#b9bbbe] hover:text-white"}`}
                  >
                    Лента
                  </button>
                </div>
                <Icon name="Bell" className="w-5 h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Icon name="Search" className="w-5 h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Контент */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">

              {activeTab === "chat" && (
                <>
                  {/* Приветствие */}
                  <div className="flex gap-2 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Bot" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-white font-medium text-sm sm:text-base">Связь</span>
                        <span className="bg-[#5865f2] text-white text-xs px-1 rounded">СИСТЕМА</span>
                        <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня</span>
                      </div>
                      <div className="text-[#dcddde] text-sm sm:text-base">
                        <p className="mb-3">
                          <strong>Добро пожаловать в Связь!</strong> Ваш приватный мессенджер для общения с близкими.
                        </p>
                        <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                          <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет Связь:</h3>
                          <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                            <li>💬 Личные и групповые чаты с ролями</li>
                            <li>👑 Администраторы и модераторы в группах</li>
                            <li>🖼 Публикация фото, видео, музыки и GIF в ленту</li>
                            <li>✏️ Редактирование профиля и аватара</li>
                            <li>🔒 Только ваш круг — никаких посторонних</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Сообщение пользователя с профилем */}
                  <div className="flex gap-2 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm font-medium">А</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-white font-medium text-sm sm:text-base">Анна</span>
                        <span className="bg-[#faa61a] text-white text-xs px-1 rounded">АДМИН</span>
                        <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:05</span>
                      </div>
                      <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                        Всем привет! Только что добавила новые фото из поездки в ленту 📸
                      </div>

                      {/* Карточка профиля */}
                      <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
                        <div className="h-16 sm:h-20 bg-gradient-to-r from-[#5865f2] to-[#7c3aed] relative">
                          <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-[#2f3136] bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative">
                              <span className="text-white text-lg font-bold">А</span>
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#3ba55c] border-3 border-[#2f3136] rounded-full border-2"></div>
                            </div>
                          </div>
                          <div className="absolute top-2 right-2">
                            <span className="bg-[#faa61a] text-white text-xs px-2 py-0.5 rounded-full font-medium">👑 Администратор</span>
                          </div>
                        </div>

                        <div className="pt-6 sm:pt-8 px-3 sm:px-4 pb-3 sm:pb-4">
                          <h3 className="text-white text-base sm:text-lg font-bold mb-0.5">Анна Петрова</h3>
                          <div className="text-[#b9bbbe] text-xs sm:text-sm mb-3">@anna_p · Москва</div>

                          <div className="bg-[#36393f] rounded p-2 mb-3 text-[#dcddde] text-xs sm:text-sm italic">
                            "Путешествую, фотографирую, делюсь с близкими ✈️"
                          </div>

                          <div className="flex gap-4 text-center">
                            <div>
                              <div className="text-white font-bold text-sm">142</div>
                              <div className="text-[#b9bbbe] text-xs">публикации</div>
                            </div>
                            <div>
                              <div className="text-white font-bold text-sm">38</div>
                              <div className="text-[#b9bbbe] text-xs">друзья</div>
                            </div>
                            <div>
                              <div className="text-white font-bold text-sm">5</div>
                              <div className="text-[#b9bbbe] text-xs">группы</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Сообщение от модератора */}
                  <div className="flex gap-2 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs sm:text-sm font-medium">Д</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-white font-medium text-sm sm:text-base">Дмитрий</span>
                        <span className="bg-[#3ba55c] text-white text-xs px-1 rounded">МОДЕРАТОР</span>
                        <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:12</span>
                      </div>
                      <div className="text-[#dcddde] text-sm sm:text-base">
                        Отличные фото! Кстати, напоминаю — завтра встреча в 19:00 🎉
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "feed" && (
                <>
                  {/* Пост с фото */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden">
                    <div className="p-3 sm:p-4 flex items-center gap-3">
                      <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">А</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Анна Петрова</div>
                        <div className="text-[#72767d] text-xs">Сегодня в 11:30</div>
                      </div>
                      <span className="ml-auto bg-[#faa61a] text-white text-xs px-1.5 py-0.5 rounded-full">👑 АДМИН</span>
                    </div>
                    <div className="px-3 sm:px-4 pb-3">
                      <p className="text-[#dcddde] text-sm mb-3">Поездка в горы удалась! Делюсь лучшими кадрами 🏔️</p>
                    </div>
                    <div className="grid grid-cols-2 gap-0.5">
                      <div className="bg-[#40444b] h-32 sm:h-48 flex items-center justify-center">
                        <Icon name="Image" className="w-8 h-8 text-[#72767d]" />
                      </div>
                      <div className="bg-[#40444b] h-32 sm:h-48 flex items-center justify-center">
                        <Icon name="Image" className="w-8 h-8 text-[#72767d]" />
                      </div>
                    </div>
                    <div className="p-3 flex items-center gap-4">
                      <button className="flex items-center gap-1.5 text-[#b9bbbe] hover:text-[#5865f2] text-sm transition-colors">
                        <Icon name="Heart" className="w-4 h-4" />
                        <span>24</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-[#b9bbbe] hover:text-[#5865f2] text-sm transition-colors">
                        <Icon name="MessageCircle" className="w-4 h-4" />
                        <span>8</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-[#b9bbbe] hover:text-[#5865f2] text-sm transition-colors ml-auto">
                        <Icon name="Share2" className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Пост с музыкой */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden">
                    <div className="p-3 sm:p-4 flex items-center gap-3">
                      <div className="w-9 h-9 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Д</span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">Дмитрий</div>
                        <div className="text-[#72767d] text-xs">Сегодня в 10:15</div>
                      </div>
                      <span className="ml-auto bg-[#3ba55c] text-white text-xs px-1.5 py-0.5 rounded-full">МОДЕРАТОР</span>
                    </div>
                    <div className="px-3 sm:px-4 pb-3">
                      <p className="text-[#dcddde] text-sm mb-3">Слушаю под настроение 🎵</p>
                      <div className="bg-[#36393f] rounded-lg p-3 flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#5865f2] to-[#7c3aed] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Music" className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-sm font-medium truncate">Evening Vibes</div>
                          <div className="text-[#b9bbbe] text-xs truncate">Ambient Collection · 3:42</div>
                          <div className="mt-1.5 h-1 bg-[#40444b] rounded-full">
                            <div className="h-full w-1/3 bg-[#5865f2] rounded-full"></div>
                          </div>
                        </div>
                        <button className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Play" className="w-3 h-3 text-white ml-0.5" />
                        </button>
                      </div>
                    </div>
                    <div className="px-3 pb-3 flex items-center gap-4">
                      <button className="flex items-center gap-1.5 text-[#b9bbbe] hover:text-[#5865f2] text-sm transition-colors">
                        <Icon name="Heart" className="w-4 h-4" />
                        <span>11</span>
                      </button>
                      <button className="flex items-center gap-1.5 text-[#b9bbbe] hover:text-[#5865f2] text-sm transition-colors">
                        <Icon name="MessageCircle" className="w-4 h-4" />
                        <span>3</span>
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Секция "Начало работы" */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="Rocket" className="w-5 h-5 sm:w-6 sm:h-6 text-[#5865f2]" />
                  Начни общаться прямо сейчас
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  {[
                    { step: "1", title: "Создай аккаунт", desc: "Регистрация за 30 секунд — имя, фото, короткое описание" },
                    { step: "2", title: "Пригласи близких", desc: "Добавляй друзей и создавай группы с нужными ролями" },
                    { step: "3", title: "Общайся и делись", desc: "Чаты, звонки, лента с фото/видео/музыкой — всё в одном месте" },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-sm sm:text-base">{step}</span>
                      </div>
                      <h3 className="text-white font-medium mb-2 text-sm sm:text-base">{title}</h3>
                      <p className="text-[#b9bbbe] text-xs sm:text-sm">{desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium">
                    <Icon name="UserPlus" className="w-4 h-4 mr-2" />
                    Зарегистрироваться
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f545c] text-[#b9bbbe] hover:bg-[#40444b] hover:border-[#6d6f78] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <Icon name="LogIn" className="w-4 h-4 mr-2" />
                    Уже есть аккаунт
                  </Button>
                </div>
              </div>

              {/* Возможности */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему Связь?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { icon: "Lock", title: "Только свои", desc: "Закрытое пространство — никаких посторонних" },
                    { icon: "Shield", title: "Роли в группах", desc: "Администраторы, модераторы и участники" },
                    { icon: "Image", title: "Медиа в ленту", desc: "Фото, видео, музыка, GIF и многое другое" },
                    { icon: "UserCog", title: "Гибкий профиль", desc: "Аватар, описание, статус — всё редактируется" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#5865f2] mt-0.5">
                        <Icon name={feature.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-3">
                <Icon name="Plus" className="w-5 h-5 text-[#8e9297]" />
                <div className="flex-1 text-[#72767d] text-xs sm:text-sm">Сообщение #друзья</div>
                <div className="flex gap-2">
                  <Icon name="Paperclip" className="w-4 h-4 text-[#8e9297] cursor-pointer hover:text-[#dcddde]" />
                  <Icon name="Smile" className="w-4 h-4 text-[#8e9297] cursor-pointer hover:text-[#dcddde]" />
                  <Icon name="Gift" className="w-4 h-4 text-[#8e9297] cursor-pointer hover:text-[#dcddde]" />
                </div>
              </div>
            </div>
          </div>

          {/* Правая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Администраторы — 1</h3>
              <div className="space-y-2">
                {[{ name: "Анна Петрова", status: "В сети", avatar: "А", color: "from-purple-500 to-pink-500", role: "👑" }].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}>
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.role} {user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Модераторы — 1</h3>
              <div className="space-y-2">
                {[{ name: "Дмитрий", status: "В сети", avatar: "Д", color: "from-green-500 to-blue-500" }].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}>
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">🛡️ {user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Участники — 3</h3>
              <div className="space-y-2">
                {[
                  { name: "Ольга", status: "В сети", avatar: "О", color: "from-pink-400 to-orange-400" },
                  { name: "Михаил", status: "Не беспокоить", avatar: "М", color: "from-indigo-500 to-purple-500" },
                  { name: "Светлана", status: "Не в сети", avatar: "С", color: "from-gray-500 to-gray-600" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}>
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${user.status === "В сети" ? "bg-[#3ba55c]" : user.status === "Не беспокоить" ? "bg-[#ed4245]" : "bg-[#72767d]"} border-2 border-[#2f3136] rounded-full`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[#b9bbbe] text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#72767d] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;