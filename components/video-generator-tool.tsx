"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Video, Upload, FileText, Image } from "lucide-react"
import { useLocale } from "next-intl"

// Video style options
const videoStyles = [
  { id: "realistic", name: "Realistic" },
  { id: "anime", name: "Anime" },
  { id: "cartoon", name: "Cartoon" },
  { id: "cinematic", name: "Cinematic" },
  { id: "artistic", name: "Artistic" },
  { id: "documentary", name: "Documentary" },
]

// Video duration options
const videoDurations = [
  { id: "short", name: "Short (5-15s)" },
  { id: "medium", name: "Medium (15-30s)" },
  { id: "long", name: "Long (30-60s)" },
]

export function VideoGeneratorTool() {
  const locale = useLocale()
  const [inputType, setInputType] = useState<"text" | "image">("text")
  const [inputText, setInputText] = useState<string>("")
  const [videoStyle, setVideoStyle] = useState<string>("realistic")
  const [videoDuration, setVideoDuration] = useState<string>("medium")
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [generatedVideo, setGeneratedVideo] = useState<string>("")
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleGenerateVideo = async () => {
    if (inputType === "text" && !inputText.trim()) {
      setError("Please enter text description for the video")
      return
    }

    if (inputType === "image" && !uploadedImage) {
      setError("Please upload an image")
      return
    }

    setLoading(true)
    setError("")
    setGeneratedVideo("")

    try {
      const requestBody = {
        inputType,
        videoStyle,
        videoDuration,
        uploadedImage,
        inputText
      }

      if (inputType === "text") {
        requestBody.inputText = inputText
      } else {
        requestBody.uploadedImage = uploadedImage
      }

      const response = await fetch("/api/video/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Video generation failed")
      }

      if (data.success && data.videoUrl) {
        setGeneratedVideo(data.videoUrl)
      } else {
        throw new Error("No video generation result received")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Video generation failed, please try again later")
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Card className="w-full border-border bg-background">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Video className="h-5 w-5 text-primary" />
          Seedance 1.5 Pro
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input type selection */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant={inputType === "text" ? "default" : "outline"}
            onClick={() => setInputType("text")}
            className="flex items-center gap-2"
          >
            <FileText className="h-4 w-4" />
            Text to Video
          </Button>
          <Button
            variant={inputType === "image" ? "default" : "outline"}
            onClick={() => setInputType("image")}
            className="flex items-center gap-2"
          >
            <Image className="h-4 w-4" />
            Image to Video
          </Button>
        </div>

        {/* Text input */}
        {inputType === "text" && (
          <div>
            <Textarea
              placeholder="Describe the video you want to generate, e.g., A golden retriever running on the beach at sunset..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[120px] resize-none"
              disabled={loading}
            />
          </div>
        )}

        {/* Image upload */}
        {inputType === "image" && (
          <div className="space-y-3">
            <div className="flex items-center justify-center w-full">
              <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="Uploaded" className="max-h-24 max-w-full object-contain" />
                  ) : (
                    <>
                      <Upload className="w-8 h-8 mb-2 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF (max 10MB)</p>
                    </>
                  )}
                </div>
                <input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>
          </div>
        )}

        {/* Video parameters settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium mb-2 block">Video Style</label>
            <Select value={videoStyle} onValueChange={setVideoStyle}>
              <SelectTrigger>
                <SelectValue placeholder="Select video style" />
              </SelectTrigger>
              <SelectContent>
                {videoStyles.map((style) => (
                  <SelectItem key={style.id} value={style.id}>
                    {style.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Video Duration</label>
            <Select value={videoDuration} onValueChange={setVideoDuration}>
              <SelectTrigger>
                <SelectValue placeholder="Select video duration" />
              </SelectTrigger>
              <SelectContent>
                {videoDurations.map((duration) => (
                  <SelectItem key={duration.id} value={duration.id}>
                    {duration.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Generate button */}
        <Button
          onClick={handleGenerateVideo}
          disabled={loading || (inputType === "text" && !inputText.trim()) || (inputType === "image" && !uploadedImage)}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Video"
          )}
        </Button>

        {/* 错误提示 */}
        {error && (
          <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* Video preview */}
        {generatedVideo && (
          <div className="rounded-md border border-border bg-secondary/50 p-4">
            <div className="text-sm text-muted-foreground mb-2">Generated Video:</div>
            <div className="bg-black rounded-md overflow-hidden">
              <video
                controls
                className="w-full max-h-64"
                poster="https://picsum.photos/seed/video-poster/640/360.jpg"
              >
                <source src={generatedVideo} type="video/mp4" />
                Your browser does not support video playback
              </video>
            </div>
            <div className="mt-2 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                Download Video
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Share Video
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
