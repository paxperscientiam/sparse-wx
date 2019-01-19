function isHoldayService(dayName: string) {
    const days = [
        /Tonight/i,
        /Sunday/i,
        /Monday/i,
        /Tuesday/i,
        /Wednesday/i,
        /Thursday/i,
        /Friday/i,
        /Saturday/i,
    ]

    return true !== days.some((rx) => rx.test(dayName))
}
