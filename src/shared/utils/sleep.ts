// sleep.ts
export function sleep(ms = 2000): Promise<void> {
  console.log('Kindly remember to remove `sleep`')
  return new Promise((resolve) => setTimeout(resolve, ms))
}
