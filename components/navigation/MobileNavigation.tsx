import { useRouter } from "next/router";
import {
  ExtraLink,
  NavigationButtonsList,
  NavigationContainer,
  NeedHelpContainer,
  ThemeModeContainer,
  MobileNavigationContainer,
} from "./NavStyles";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { HamburgerIcon, LearnIcon, SunIcon, TutorialsIcon } from "../icons";
import { navLinks } from "../../constants/navLinks";
import { useState } from "react";

export const MobileNavigation = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <MobileNavigationContainer>
      <h1>
        <span>AV</span> DESIGNER
      </h1>

      <HamburgerIcon onClick={() => setIsOpen(true)} />

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              style={{
                width: "100vw",
                zIndex: 5,
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                background: "rgba(255,255,255,.25)",
                cursor: "pointer",
              }}
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              style={{ position: "fixed", right: 0, top: 0, zIndex: 10 }}
              initial={{ opacity: 0, x: 239 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 239 }}
              transition={{ type: "just" }}
            >
              <NavigationContainer>
                <h1>
                  <span>AV</span> DESIGNER
                </h1>

                <NavigationButtonsList>
                  {navLinks.map(({ href, title, icon }, i) => (
                    <li key={i}>
                      {href === router.pathname && (
                        <motion.div
                          layoutId="navigation"
                          style={{
                            width: "100%",
                            height: "100%",
                            background: "#FF6600",
                            position: "absolute",
                            borderRadius: 8,
                          }}
                        />
                      )}
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          router.push(href);
                        }}
                      >
                        {icon} {title}
                      </button>
                    </li>
                  ))}
                </NavigationButtonsList>

                <Link href="/" passHref>
                  <ExtraLink>
                    <span>
                      <LearnIcon />
                    </span>
                    Learn AV Designer
                  </ExtraLink>
                </Link>

                <Link href="/" passHref>
                  <ExtraLink>
                    <span>
                      <TutorialsIcon />
                    </span>
                    Tutorials
                  </ExtraLink>
                </Link>

                <NeedHelpContainer>
                  <p>Need Help?</p>

                  <Link href="/">
                    <a>Get Support/Feedback</a>
                  </Link>
                </NeedHelpContainer>

                <ThemeModeContainer>
                  <SunIcon />

                  <label>
                    <input type="checkbox" />
                    <span />
                  </label>
                </ThemeModeContainer>
              </NavigationContainer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </MobileNavigationContainer>
  );
};
