import { State } from '..'

export const getIsAnalyzing = (state: State) => state.analyze.isLoading
export const getLog = (state: State) => state.analyze.log
