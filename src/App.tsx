import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

import {
  MainContainer,
  Header,
  ClockContainer,
  Clock,
  ButtonUpdateTime,
  Title,
  Text,
  ButtonContainer
} from './App-styled'
import getTime, { TimeModel } from './api'

const App = () => {
  const [stockholmTime, setStockholmTime] = useState<string>('')
  const [newyorkTime, setNewyorkTime] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [dissabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    updateTime()
  }, [])

  useEffect(() => {
    if (loading) updateTime()
  }, [loading])

  const updateTime = async (): Promise<void> => {
    const stockholmTime: TimeModel = await getTime('Europe/Stockholm')
    const newyorkTime: TimeModel = await getTime('America/New_York')

    setStockholmTime(parseTime(stockholmTime))
    setNewyorkTime(parseTime(newyorkTime))

    setLoading(false)
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
    }, 5000)
  }

  const parseTime = ({ utc_datetime, timezone }: TimeModel): string =>
    moment(utc_datetime)
      .tz(timezone)
      .format('HH:mm')

  const triggerLoading = (): void => setLoading(true)

  return (
    <MainContainer>
      <Header>
        <ClockContainer>
          <Clock>
            <Title>Stockhom</Title>
            <Text>{stockholmTime}</Text>
          </Clock>
          <Clock>
            <Title>New York</Title>
            <Text>{newyorkTime}</Text>
          </Clock>
        </ClockContainer>
        <ButtonContainer>
          {loading ? (
            <Text>...Loading</Text>
          ) : (
            <ButtonUpdateTime onClick={triggerLoading} disabled={dissabled}>
              Update time
            </ButtonUpdateTime>
          )}
        </ButtonContainer>
      </Header>
    </MainContainer>
  )
}

export default App
