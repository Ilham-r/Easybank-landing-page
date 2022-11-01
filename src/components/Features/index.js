import React from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardWrapp,
  Container,
  Icon,
  SubTitle,
  Title,
  Wrapper
} from "./FeaturesElements";

import { Online, Onboarding, Budgeting, Api } from "../../images";

export default function Features() {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Why choose Easybank?</Title>
          <SubTitle>
            We leverage Open Banking to turn your bank account into your
            financial hub.
            <br /> Control your finances like never before
          </SubTitle>
          <CardWrapp>
            <Card>
              <Icon src={Online} alt="online icon" />
              <CardTitle>Online Banking</CardTitle>
              <CardContent>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </CardContent>
            </Card>
            <Card>
              <Icon src={Budgeting} alt="online icon" />
              <CardTitle>Simple Budgeting </CardTitle>
              <CardContent>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </CardContent>
            </Card>
            <Card>
              <Icon src={Onboarding} alt="online icon" />
              <CardTitle>Fast Onboarding </CardTitle>
              <CardContent>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </CardContent>
            </Card>
            <Card>
              <Icon src={Api} alt="online icon" />
              <CardTitle>Open API </CardTitle>
              <CardContent>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </CardContent>
            </Card>
          </CardWrapp>
        </Wrapper>
      </Container>
    </>
  );
}
