#!/usr/bin/env ruby

root = File.expand_path('..', __dir__)
audio_dir = File.join(root, 'assets', 'audio')
index_path = File.join(root, 'index.html')

audio_count = Dir.glob(File.join(audio_dir, '**', '*.{mp3,wav,m4a,ogg}'), File::FNM_CASEFOLD).count
index_html = File.read(index_path)

audio_count_marker = /<strong data-stat="audio-count">\d+<\/strong>/

unless index_html.match?(audio_count_marker)
  abort 'Nu am găsit markerul data-stat="audio-count" în index.html.'
end

updated_html = index_html.sub(
  audio_count_marker,
  %(<strong data-stat="audio-count">#{audio_count}</strong>)
)

File.write(index_path, updated_html)
puts "Audio count actualizat: #{audio_count}"
