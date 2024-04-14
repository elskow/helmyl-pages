const getBase64Image = async (imgpath: string) => {
    const response = await fetch(imgpath)
    const blob = await response.blob()
    return await new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend = () => {
            resolve(reader.result as string)
        }
    })
}

export default getBase64Image
