"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
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
  const [progress, setProgress] = useState<number>(0)
  const [showProgress, setShowProgress] = useState<boolean>(false)

  const handleGenerateVideo = () => {
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
    setProgress(0)
    setShowProgress(true)

    // Calculate progress increment per second for 15 seconds
    const increment = 100 / 15
    let currentProgress = 0

    // Update progress every second
    const interval = setInterval(() => {
      currentProgress += increment
      if (currentProgress >= 100) {
        clearInterval(interval)
        setProgress(100)
        // Redirect to project's login page after 15 seconds
        window.location.href = `/${locale}/auth/signin`
      } else {
        setProgress(Math.round(currentProgress))
      }
    }, 1000)
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
    <Card className="w-full border-border/50 bg-gradient-to-br from-card/80 to-primary/5 shadow-xl ring-1 ring-primary/30 backdrop-blur-sm animate-fade-in-up">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gradient-primary">
          <Video className="h-6 w-6 text-primary" />
          Seedance 1.5 Pro
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input type selection */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant={inputType === "text" ? "default" : "outline"}
            onClick={() => setInputType("text")}
            className={`flex items-center gap-2 flex-1 transition-all duration-300 hover:translate-y-[-2px] ${
              inputType === "text" 
                ? "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-lg shadow-primary/30"
                : "bg-card border border-border/50 hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
            }`}
          >
            <FileText className="h-4 w-4" />
            Text to Video
          </Button>
          <Button
            variant={inputType === "image" ? "default" : "outline"}
            onClick={() => setInputType("image")}
            className={`flex items-center gap-2 flex-1 transition-all duration-300 hover:translate-y-[-2px] ${
              inputType === "image" 
                ? "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-lg shadow-primary/30"
                : "bg-card border border-border/50 hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
            }`}
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
              className="min-h-[120px] resize-none bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 rounded-xl"
              disabled={loading}
            />
          </div>
        )}

        {/* Image upload */}
        {inputType === "image" && (
          <div className="space-y-3">
            <div className="flex items-center justify-center w-full">
              <label htmlFor="image-upload" className="flex flex-col items-center justify-center w-full h-40 border-2 border-border/50 border-dashed rounded-xl cursor-pointer bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="Uploaded" className="max-h-32 max-w-full object-contain" />
                  ) : (
                    <>
                      <Upload className="w-10 h-10 mb-3 text-primary" />
                      <p className="mb-2 text-sm text-foreground">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">PNG, JPG, GIF (max 10MB)</p>
                    </>
                  )}
                </div>
                <input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>
          </div>
        )}

        {/* Video parameters settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block text-foreground">Video Style</label>
            <Select value={videoStyle} onValueChange={setVideoStyle}>
              <SelectTrigger className="bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
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
            <label className="text-sm font-medium mb-2 block text-foreground">Video Duration</label>
            <Select value={videoDuration} onValueChange={setVideoDuration}>
              <SelectTrigger className="bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
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
          className="w-full bg-gradient-to-r from-primary to-purple-500 text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:translate-y-[-2px]"
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

        {/* Progress bar */}
        {showProgress && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Generating video...</span>
              <span className="text-primary font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 bg-primary/20" />
          </div>
        )}

        {/* 错误提示 */}
        {error && (
          <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* Video preview */}
        {generatedVideo && (
          <div className="rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-primary/5 p-4">
            <div className="text-sm font-medium text-foreground mb-3">Generated Video:</div>
            <div className="bg-black rounded-xl overflow-hidden shadow-lg">
              <video
                controls
                className="w-full max-h-64"
                poster="https://picsum.photos/seed/video-poster/640/360.jpg"
              >
                <source src={generatedVideo} type="video/mp4" />
                Your browser does not support video playback
              </video>
            </div>
            <div className="mt-3 flex gap-3">
              <Button variant="outline" size="sm" className="flex-1 bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                Download Video
              </Button>
              <Button variant="outline" size="sm" className="flex-1 bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                Share Video
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}