"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";

import { routes, display, person, dashboard, send, receive, history, profile } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

type TimeDisplayProps = {
  timeZone: string;
  locale?: string; // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = "en-GB" }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat(locale, options).format(now);
      setCurrentTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone, locale]);

  return <>{currentTime}</>;
};

export default TimeDisplay;

export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9} />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
          {display.location && <Flex hide="s">{person.location}</Flex>}
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/dashboard"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="dashboard"
                    href="/dashboard"
                    label={dashboard.label}
                    selected={pathname === "/dashboard"}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="dashboard"
                    href="/dashboard"
                    selected={pathname === "/dashboard"}
                  />
                </>
              )}
              {routes["/send"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="send"
                    href="/send"
                    label={send.label}
                    selected={pathname.startsWith("/send")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="send"
                    href="/send"
                    selected={pathname.startsWith("/send")}
                  />
                </>
              )}
              {routes["/receive"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="receive"
                    href="/receive"
                    label={receive.label}
                    selected={pathname.startsWith("/receive")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="receive"
                    href="/receive"
                    selected={pathname.startsWith("/receive")}
                  />
                </>
              )}
              {routes["/history"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="history"
                    href="/history"
                    label={history.label}
                    selected={pathname.startsWith("/history")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="history"
                    href="/history"
                    selected={pathname.startsWith("/history")}
                  />
                </>
              )}
              {routes["/profile"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/profile"
                    label={profile.label}
                    selected={pathname.startsWith("/profile")}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/profile"
                    selected={pathname.startsWith("/profile")}
                  />
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
            <Flex hide="s">{display.time && <TimeDisplay timeZone={person.location} />}</Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
