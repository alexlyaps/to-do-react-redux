import { ThemeProvider } from "@/components/theme-provider";
import { useState, ReactNode } from "react";

type PanelProps = {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onShow: () => void;
};

function Panel({ title, children, isActive, onShow }: PanelProps) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Panel
        title="about"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Children of About
      </Panel>
      <Panel
        title="Et"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Children of ET
      </Panel>
    </ThemeProvider>
  );
}
